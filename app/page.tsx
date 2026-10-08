"use client";

import Link from "next/link";
import { useState } from "react";
import { useFavorites } from "./use-favorites";
import Image from "next/image";
import { animeList } from "../data/anime";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const { favorites, favoritesLoaded, toggleFavorite } = useFavorites();
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");
  const [visibleCount, setVisibleCount] = useState(12);
  const genres = Array.from(
    new Set(
      animeList.flatMap((anime) =>
        anime.genre.split("·").map((genre) => genre.trim()),
      ),
    ),
  ).sort();

  const filteredAnime = animeList
    .filter((anime) => {
      const matchesSearch = `${anime.title} ${anime.original}`
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesGenre =
        selectedGenre === "" ||
        anime.genre
          .split("·")
          .map((genre) => genre.trim())
          .includes(selectedGenre);

      const matchesFavorite =
        !showFavoritesOnly || favorites.includes(anime.slug);

      return matchesSearch && matchesGenre && matchesFavorite;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return b.year - a.year;
      }

      if (sortOrder === "oldest") {
        return a.year - b.year;
      }

      return 0;
    });
  return (
    <div className="min-h-screen bg-[#0b0b14] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <Link href="/" className="text-2xl font-black tracking-tight">
            ANIME<span className="text-violet-400">VERSE</span>
          </Link>

          <a
            href="#catalog"
            className="text-base text-gray-300 hover:text-violet-400"
          >
            Каталог аниме
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <section className="mb-14 max-w-3xl">
          <p className="mb-4 font-semibold text-violet-400">
            Открой для себя аниме
          </p>

          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Какая история
            <br />
            станет твоей любимой?
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            Познакомься с героями и мирами — от напряжённых детективов до
            историй о любви.
          </p>

          <a
            href="#catalog"
            className="mt-8 inline-block rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
          >
            Выбрать аниме
          </a>
        </section>

        <section id="catalog" className="scroll-mt-8">
          <h2 className="mb-6 text-2xl font-bold">Каталог аниме</h2>
          <div className="mb-6">
            <div className="grid gap-4 lg:grid-cols-[2fr_1fr_1fr]">
              <div>
                <label
                  htmlFor="anime-search"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Поиск аниме
                </label>
                <input
                  id="anime-search"
                  type="text"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setVisibleCount(12);
                  }}
                  placeholder="Название на русском или английском"
                  className="h-12 w-full rounded-xl border border-white/15 bg-[#151521] px-4 text-white outline-none focus:border-violet-400"
                />
              </div>

              <div>
                <label
                  htmlFor="anime-genre"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Жанр
                </label>
                <select
                  id="anime-genre"
                  value={selectedGenre}
                  onChange={(event) => {
                    setSelectedGenre(event.target.value);
                    setVisibleCount(12);
                  }}
                  className="h-12 w-full rounded-xl border border-white/15 bg-[#151521] px-4 text-white outline-none focus:border-violet-400"
                >
                  <option value="">Все жанры</option>
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="anime-sort"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Сортировка
                </label>
                <select
                  id="anime-sort"
                  value={sortOrder}
                  onChange={(event) => {
                    setSortOrder(event.target.value);
                    setVisibleCount(12);
                  }}
                  className="h-12 w-full rounded-xl border border-white/15 bg-[#151521] px-4 text-white outline-none focus:border-violet-400"
                >
                  <option value="default">По умолчанию</option>
                  <option value="newest">Сначала новые</option>
                  <option value="oldest">Сначала старые</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedGenre("");
                setSortOrder("default");
                setShowFavoritesOnly(false);
                setVisibleCount(12);
              }}
              className="mt-4 rounded-xl border border-violet-400/40 px-4 py-3 text-violet-300 transition hover:bg-violet-500/10"
            >
              Сбросить фильтры
            </button>
          </div>
          <label className="mb-4 flex min-h-11 cursor-pointer items-center gap-3 text-sm text-gray-300">
            <input
              type="checkbox"
              checked={showFavoritesOnly}
              onChange={(event) => {
                setShowFavoritesOnly(event.target.checked);
                setVisibleCount(12);
              }}
              disabled={!favoritesLoaded}
              className="h-5 w-5 accent-violet-500"
            />
            Только избранное
          </label>
          <p className="mb-4 text-sm text-gray-400" role="status">
            Найдено: {filteredAnime.length} из {animeList.length}
          </p>
          {filteredAnime.length === 0 && (
            <p className="mb-6 text-gray-400">
              Ничего не найдено. Попробуй другое название.
            </p>
          )}
          <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAnime.slice(0, visibleCount).map((anime, index) => (
              <article
                key={anime.slug}
                className="flex flex-col rounded-2xl border border-white/10 bg-[#151521] p-6 transition hover:border-violet-500/60"
              >
                <span className="mb-8 text-4xl font-black text-violet-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  <Link
                    href={`/anime/${anime.slug}`}
                    className="hover:text-violet-400"
                  >
                    {anime.title}
                  </Link>
                </h3>
                <button
                  type="button"
                  onClick={() => toggleFavorite(anime.slug)}
                  disabled={!favoritesLoaded}
                  aria-pressed={favorites.includes(anime.slug)}
                  className="mb-3 rounded-lg border border-violet-400/40 px-3 py-2 text-sm text-violet-300 transition hover:bg-violet-500/10 disabled:opacity-50"
                >
                  {favorites.includes(anime.slug)
                    ? "♥ В избранном"
                    : "♡ В избранное"}
                </button>

                <p className="mb-2 text-sm text-gray-400">{anime.original}</p>

                <p className="mb-4 text-sm text-gray-400">
                  {anime.year} · {anime.format}
                </p>
                <Image
                  src={anime.cover}
                  alt={`Постер аниме «${anime.title}»`}
                  width={700}
                  height={1024}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="mb-5 aspect-[2/3] w-full rounded-xl bg-black object-contain"
                />

                <p className="mt-3 text-sm leading-relaxed text-violet-300">
                  {anime.genre}
                </p>

                <p className="mt-5 text-base leading-relaxed text-gray-300">
                  {anime.description}
                </p>
                <a
                  href={anime.trailerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-xl bg-violet-600 px-5 py-3 text-center font-semibold transition hover:bg-violet-500"
                >
                  Открыть трейлер ↗
                </a>
              </article>
            ))}
          </div>
          {visibleCount < filteredAnime.length && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + 12)}
                className="rounded-xl border border-violet-400/40 px-6 py-3 font-semibold text-violet-300 transition hover:bg-violet-500/10"
              >
                Показать ещё {Math.min(12, filteredAnime.length - visibleCount)}
              </button>
              <p className="mt-3 text-sm text-gray-400">
                Показано {Math.min(visibleCount, filteredAnime.length)} из{" "}
                {filteredAnime.length}
              </p>
            </div>
          )}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "instant"
                    : "smooth",
                })
              }
              className="min-h-12 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
            >
              ↑ Наверх
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-gray-400">
        ANIMEVERSE · Знакомство с миром аниме
      </footer>
    </div>
  );
}
