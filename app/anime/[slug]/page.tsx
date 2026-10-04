import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { animeList } from "../../../data/anime";

export function generateStaticParams() {
  return animeList.map((anime) => ({
    slug: anime.slug,
  }));
}

export default async function AnimePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const anime = animeList.find((item) => item.slug === slug);

  if (!anime) {
    notFound();
  }

  const cover =
    anime.original === "Attack on Titan"
      ? "/anime/attack-on-titan.jpg"
      : anime.original === "Death Note"
        ? "/anime/death-note.jpg"
        : "/anime/your-name.jpeg";

  return (
    <main className="min-h-screen bg-[#0b0b12] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#catalog"
          className="mb-8 inline-block text-violet-300 hover:underline"
        >
          ← Вернуться в каталог
        </Link>

        <article className="grid gap-8 md:grid-cols-[300px_1fr]">
          <Image
            src={cover}
            alt={`Постер аниме «${anime.title}»`}
            width={700}
            height={1024}
            sizes="(max-width: 768px) 100vw, 300px"
            className="aspect-[2/3] w-full rounded-xl bg-black object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold md:text-5xl">
              {anime.title}
            </h1>
            <p className="mt-3 text-gray-400">{anime.original}</p>
            <p className="mt-3 text-gray-400">
  Год выпуска: {anime.year} · {anime.format}
</p>
            <p className="mt-5 text-violet-300">{anime.genre}</p>

            <h2 className="mt-8 text-xl font-semibold">
              Описание
            </h2>
            <p className="mt-3 leading-8 text-gray-300">
              {anime.description}
            </p>
            <a
  href={anime.trailerUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-block rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
>
  Открыть трейлер ↗
</a>
          </div>
        </article>
      </div>
    </main>
  );
}