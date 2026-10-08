"use client";

import { useMemo, useSyncExternalStore } from "react";

const storageKey = "anime-favorites";
const changeEvent = "anime-favorites-change";
let memoryValue = "[]";
let memoryOnly = false;

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(changeEvent, onChange);
  };
}

function getSnapshot() {
  if (memoryOnly) return memoryValue;
  try {
    return localStorage.getItem(storageKey) ?? memoryValue;
  } catch {
    return memoryValue;
  }
}

function getServerSnapshot(): string | null {
  return null;
}

function parseFavorites(value: string | null): string[] {
  try {
    const parsed: unknown = JSON.parse(value ?? "[]");
    return Array.isArray(parsed)
      ? [
          ...new Set(
            parsed.filter((slug): slug is string => typeof slug === "string"),
          ),
        ]
      : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const favorites = useMemo(() => parseFavorites(value), [value]);

  function toggleFavorite(slug: string) {
    const current = parseFavorites(getSnapshot());
    const next = current.includes(slug)
      ? current.filter((item) => item !== slug)
      : [...current, slug];
    memoryValue = JSON.stringify(next);
    try {
      localStorage.setItem(storageKey, memoryValue);
      memoryOnly = false;
    } catch {
      // When browser storage is unavailable, favorites still work for this session.
      memoryOnly = true;
    }
    window.dispatchEvent(new Event(changeEvent));
  }

  return { favorites, favoritesLoaded: value !== null, toggleFavorite };
}
