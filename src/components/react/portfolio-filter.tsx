"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { CATEGORIES, portfolioSections, type Category, type VideoItem } from "@/data/portfolio";

function getCleanVimeoId(videoId: string): string {
  const match = videoId.toString().match(/(?:video\/|vimeo\.com\/|^)(\\d+)/);
  return match ? match[1] : videoId.toString().replace(/[^0-9]/g, "") || videoId;
}

function VideoCard({ video }: { video: VideoItem }) {
  const cleanId = getCleanVimeoId(video.id);

  return (
    <div
      data-aspect={video.aspect}
      className="relative w-full h-full overflow-hidden bg-black rounded-lg border border-border shadow-xs group"
    >
      <div
        className={`relative w-full overflow-hidden bg-black ${
          video.aspect === "portrait" ? "aspect-[9/16]" : "aspect-[16/9]"
        }`}
      >
        <iframe
          src={`https://player.vimeo.com/video/${cleanId}?autopause=0&loop=0&muted=0&title=1&portrait=0&byline=0`}
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          title={video.title}
        />
      </div>
    </div>
  );
}

export default function PortfolioFilter() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [clickCount, setClickCount] = useState<number>(0);
  const [chunkHeight, setChunkHeight] = useState<number>(980);
  const [totalHeight, setTotalHeight] = useState<number>(0);
  const gridRef = useRef<HTMLDivElement>(null);

  // Flat list of all videos (deduplicated for category filtering)
  const allVideos = useMemo(() => {
    const list: VideoItem[] = [];
    const seen = new Set<string>();
    for (const section of portfolioSections) {
      for (const video of [...section.leftVideos, ...section.rightVideos]) {
        if (!seen.has(video.id)) {
          seen.add(video.id);
          list.push(video);
        }
      }
    }
    return list;
  }, []);

  // Compute Left and Right bento column lists
  const { leftCol, rightCol } = useMemo(() => {
    if (activeCategory === "All") {
      return {
        leftCol: portfolioSections.flatMap((s) => s.leftVideos),
        rightCol: portfolioSections.flatMap((s) => s.rightVideos),
      };
    }

    const filtered = allVideos.filter((v) => v.category === activeCategory);
    const portraits = filtered.filter((v) => v.aspect === "portrait");
    const landscapes = filtered.filter((v) => v.aspect === "landscape");

    const left: VideoItem[] = [];
    const right: VideoItem[] = [];

    // Distribute pairs of portraits so 2 portrait videos sit side by side (col-span-1 each)
    while (portraits.length >= 2) {
      if (left.length <= right.length) {
        left.push(portraits.shift()!);
        left.push(portraits.shift()!);
      } else {
        right.push(portraits.shift()!);
        right.push(portraits.shift()!);
      }
    }

    // Distribute landscapes (col-span-2)
    while (landscapes.length > 0) {
      if (left.length <= right.length) {
        left.push(landscapes.shift()!);
      } else {
        right.push(landscapes.shift()!);
      }
    }

    // Any leftover single portrait
    if (portraits.length === 1) {
      if (left.length <= right.length) {
        left.push(portraits.shift()!);
      } else {
        right.push(portraits.shift()!);
      }
    }

    return { leftCol: left, rightCol: right };
  }, [activeCategory, allVideos]);

  // Measure 1 vertical + 1 horizontal + 1/2 horizontal worth of height and total grid height
  const updateMeasurements = useCallback(() => {
    if (!gridRef.current) return;

    setTotalHeight(gridRef.current.scrollHeight);

    const portraitEl = gridRef.current.querySelector<HTMLElement>('[data-aspect="portrait"]');
    const landscapeEl = gridRef.current.querySelector<HTMLElement>('[data-aspect="landscape"]');
    const computedStyle = window.getComputedStyle(gridRef.current);
    const gap = parseFloat(computedStyle.rowGap) || 12;

    if (portraitEl && landscapeEl) {
      const hV = portraitEl.offsetHeight;
      const hH = landscapeEl.offsetHeight;
      const measured = Math.round(hV + hH + 0.5 * hH + 2 * gap);
      if (measured > 0) {
        setChunkHeight(measured);
        return;
      }
    }

    // Fallback based on column width
    const containerWidth = gridRef.current.offsetWidth;
    const isDesktop = containerWidth >= 768;
    const colWidth = isDesktop ? (containerWidth - gap) / 2 : containerWidth;
    const hH = colWidth * (9 / 16);
    const hV = ((colWidth - gap) / 2) * (16 / 9);
    const fallback = Math.round(hV + hH + 0.5 * hH + 2 * gap);
    if (fallback > 0) {
      setChunkHeight(fallback);
    }
  }, []);

  useEffect(() => {
    updateMeasurements();

    if (!gridRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      updateMeasurements();
    });
    resizeObserver.observe(gridRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateMeasurements, leftCol, rightCol]);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setClickCount(0);
  };

  const handleSeeMore = () => {
    setClickCount((prev) => prev + 1);
  };

  // Determine current max height limit and whether the end has been reached
  const currentLimit = chunkHeight * (clickCount + 1);
  const hasReachedEnd = totalHeight > 0 && currentLimit >= totalHeight - 20;

  return (
    <div className="w-full space-y-8 md:space-y-10">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;

          return (
            <Button
              key={category}
              variant="ghost"
              size="default"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-4 text-xs md:text-sm font-medium transition-all ${
                isActive
                  ? "bg-muted text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </Button>
          );
        })}
      </div>

      {/* Bento Grid with See More height reveal */}
      <div className="relative">
        <div
          style={{
            maxHeight: hasReachedEnd ? "none" : `${currentLimit}px`,
          }}
          className={`transition-[max-height] duration-700 ease-in-out ${
            hasReachedEnd ? "overflow-visible" : "overflow-hidden"
          }`}
        >
          {/* One Large Bento Box Grid without any section headings */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 items-start"
          >
            {/* Left Bento Column */}
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {leftCol.map((video, idx) => (
                <div
                  key={`${video.id}-left-${idx}`}
                  className={video.aspect === "landscape" ? "col-span-2" : "col-span-1"}
                >
                  <VideoCard video={video} />
                </div>
              ))}
            </div>

            {/* Right Bento Column */}
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {rightCol.map((video, idx) => (
                <div
                  key={`${video.id}-right-${idx}`}
                  className={video.aspect === "landscape" ? "col-span-2" : "col-span-1"}
                >
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft gradient fade overlay when clipped */}
        {!hasReachedEnd && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 md:h-36 bg-gradient-to-t from-background via-background/70 to-transparent" />
        )}
      </div>

      {/* See More Button (keeps going until we reach the end) */}
      {!hasReachedEnd && (
        <div className="flex justify-center pt-2 pb-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handleSeeMore}
            className="rounded-full px-7 py-2.5 text-xs md:text-sm font-medium tracking-wide border-border/80 bg-background hover:bg-muted text-foreground transition-all shadow-xs flex items-center gap-2 group cursor-pointer"
          >
            <span>See More</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-y-0.5 transition-transform" />
          </Button>
        </div>
      )}
    </div>
  );
}
