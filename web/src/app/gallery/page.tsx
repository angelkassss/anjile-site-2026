"use client";

import { useMemo, useState } from "react";
import { galleryItems, type GalleryItem } from "@/data/gallery";

const allTags = (items: GalleryItem[]) => {
  const set = new Set<string>();
  items.forEach((i) => i.tags.forEach((t) => set.add(t)));
  return ["all", ...Array.from(set).sort()];
};

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState("all");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const tags = useMemo(() => allTags(galleryItems), []);
  const filtered = useMemo(() => {
    if (activeTag === "all") return galleryItems;
    return galleryItems.filter((i) => i.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold text-white">Gallery</h1>
          <p className="mt-2 text-white/60">Pinterest energy, curated like a moodboard.</p>
        </div>
      </div>

      {/* Tag pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((t) => {
          const selected = t === activeTag;
          return (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className={[
                "rounded-full px-3 py-1 text-sm transition card",
                selected ? "text-white glow-green" : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Masonry */}
      <div className="mt-8 columns-2 gap-4 md:columns-3 lg:columns-4">
        {filtered.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p)}
            className="mb-4 w-full break-inside-avoid text-left"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <img
                src={p.src}
                alt={p.alt}
                className="w-full object-cover transition duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-xs text-white/50">{p.alt}</p>
          </button>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5"
          onClick={() => setActive(null)}
        >
          <div
            className="card w-full max-w-3xl rounded-3xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-white font-medium">{active.alt}</p>
                <p className="mt-1 text-sm text-white/60">
                  {active.tags.map((t) => `#${t}`).join(" ")}
                </p>
              </div>

              <button
                onClick={() => setActive(null)}
                className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/70 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <img src={active.src} alt={active.alt} className="w-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
