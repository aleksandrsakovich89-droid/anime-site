
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { animeList } from "../data/anime";

export default function Home() {
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
const [sortOrder, setSortOrder] = useState("default");
    const genres = Array.from(
    new Set(
      animeList.flatMap((anime) =>
        anime.genre.split("·").map((genre) => genre.trim())
      )
    )
  ).sort();

  const filteredAnime = animeList.filter((anime) => {
    const matchesSearch = `${anime.title} ${anime.original}`
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesGenre =
      selectedGenre === "" ||
      anime.genre
        .split("·")
        .map((genre) => genre.trim())
        .includes(selectedGenre);

   return matchesSearch && matchesGenre;
}).sort((a, b) => {
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
          <a href="/" className="text-2xl font-black tracking-tight">
            ANIME<span className="text-violet-400">VERSE</span>
          </a>

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
            Познакомься с героями и мирами — от напряжённых детективов
            до историй о любви.
          </p>

          <a
            href="#catalog"
            className="mt-8 inline-block rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
          >
            Выбрать аниме
          </a>
        </section>

        <section id="catalog" className="scroll-mt-8">
          <h2 className="mb-6 text-2xl font-bold">
            С чего начать
          </h2>
<div className="mb-6">
  <label
    htmlFor="anime-search"
    className="mb-2 block text-sm text-gray-300"
  >
    Поиск аниме
  </label>
  <input
    id="anime-search"
    type="search"
    value={search}
    onChange={(event) => setSearch(event.target.value)}
    placeholder="Название на русском или английском"
    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-violet-500 focus:outline-none"
  />
</div>
<div className="mb-6">
  <label
    htmlFor="anime-genre"
    className="mb-2 block text-sm text-gray-300"
  >
    Жанр
  </label>
  <select
    id="anime-genre"
    value={selectedGenre}
    onChange={(event) => setSelectedGenre(event.target.value)}
    className="w-full rounded-xl border border-white/15 bg-[#151521] px-4 py-3 text-white focus:border-violet-500 focus:outline-none"
  >
    <option value="">Все жанры</option>
    {genres.map((genre) => (
      <option key={genre} value={genre}>
        {genre}
      </option>
    ))}
  </select>
<div className="mt-4">
  <label
    htmlFor="anime-sort"
    className="mb-2 block text-sm text-gray-300"
  >
    Сортировка
  </label>

  <select
    id="anime-sort"
    value={sortOrder}
    onChange={(event) => setSortOrder(event.target.value)}
    className="w-full rounded-xl border border-white/15 bg-[#151521] px-4 py-3 text-white"
  >
    <option value="default">По умолчанию</option>
    <option value="newest">Сначала новые</option>
    <option value="oldest">Сначала старые</option>
  </select>
</div>
</div>
{filteredAnime.length === 0 && (
  <p className="mb-6 text-gray-400">
    Ничего не найдено. Попробуй другое название.
  </p>
)}
          <div className="grid items-start gap-6 md:grid-cols-3">
            {filteredAnime.map((anime, index) => (
              <article
                key={anime.original}
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

                <p className="mb-2 text-sm text-gray-400">
                  {anime.original}
                </p>
              
                <p className="mb-4 text-sm text-gray-400">
  {anime.year} · {anime.format}
</p>
                <Image
  src={
    anime.original === "Attack on Titan"
      ? "/anime/attack-on-titan.jpg"
      : anime.original === "Death Note"
        ? "/anime/death-note.jpg"
        : "/anime/your-name.jpeg"
  }
  alt={`Постер аниме «${anime.title}»`}
  width={700}
  height={1024}
  sizes="(max-width: 768px) 100vw, 33vw"
  className="mb-5 aspect-[2/3] w-full rounded-xl bg-black object-contain"
/>
                <h3 className="text-2xl font-bold">
  <Link
    href={`/anime/${anime.slug}`}
    className="hover:text-violet-300"
  >
    {anime.title}
  </Link>
</h3>

                <p className="mt-3 text-sm leading-relaxed text-violet-300">
                  {anime.genre}
                </p>

                <p className="mt-5 text-base leading-relaxed text-gray-300">
                  {anime.description}
                </p>
                {anime.original === "Attack on Titan" && (
  <div className="mt-6">
    <h4 className="mb-3 font-semibold">
      Трейлер на русском
    </h4>
    <a
      href="https://rutube.ru/video/dbe0f3bf1aab168ab4d7d207f7321f05/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-block text-sm text-violet-300 underline"
    >
      Открыть трейлер на RUTUBE
    </a>
  </div>
)}

{anime.original === "Death Note" && (
  <div className="mt-6">
    <h4 className="mb-3 font-semibold">
      Трейлер аниме
    </h4>

    <a
      href="https://www.kinopoisk.ru/film/406148/video/163539/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500"
    >
      Смотреть на Кинопоиске
    </a>
  </div>
)}
                {anime.original === "Your Name" && (
  <div className="mt-6">
    <h4 className="mb-3 font-semibold">
      Трейлер на русском
    </h4>
    <a
      href="https://rutube.ru/video/0ae79d1eefaa1fce86a07b67d86576b6/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-block text-sm text-violet-300 underline"
    >
      Открыть трейлер на RUTUBE
    </a>
  </div>
)}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-gray-400">
        ANIMEVERSE · Знакомство с миром аниме
      </footer>
    </div>
  );
}