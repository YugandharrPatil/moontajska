"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, portfolioSections, type Category, type VideoItem } from "@/data/portfolio";

function getCleanVimeoId(videoId: string): string {
  const match = videoId.toString().match(/(?:video\/|vimeo\.com\/|^)(\d+)/);
  return match ? match[1] : videoId.toString().replace(/[^0-9]/g, "") || videoId;
}

function VideoCard({ video }: { video: VideoItem }) {
  const cleanId = getCleanVimeoId(video.id);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black rounded-lg border border-border shadow-xs group">
      <div
        className={`relative w-full overflow-hidden bg-black ${
          video.aspect === "portrait" ? "aspect-[9/16]" : "aspect-[16/9]"
        }`}
      >
        <iframe
          src={`https://player.vimeo.com/video/${cleanId}?autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1`}
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

  // Flat list of all videos
  const allVideos = useMemo(() => {
    return portfolioSections.flatMap((section) => [
      ...section.leftVideos,
      ...section.rightVideos,
    ]);
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

  return (
    <div className="w-full space-y-8 md:space-y-10">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const count =
            category === "All"
              ? allVideos.length
              : allVideos.filter((v) => v.category === category).length;

          return (
            <Button
              key={category}
              variant={isActive ? "default" : "outline"}
              size="default"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 text-xs md:text-sm font-medium transition-all ${
                isActive
                  ? "bg-foreground text-background shadow-xs hover:bg-foreground/90"
                  : "bg-background text-muted-foreground hover:text-foreground border-border"
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[0.7rem] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive
                    ? "bg-background/20 text-background"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </Button>
          );
        })}
      </div>

      {/* One Large Bento Box Grid without any section headings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 items-start">
        {/* Left Bento Column */}
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {leftCol.map((video) => (
            <div
              key={video.id}
              className={video.aspect === "landscape" ? "col-span-2" : "col-span-1"}
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>

        {/* Right Bento Column */}
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {rightCol.map((video) => (
            <div
              key={video.id}
              className={video.aspect === "landscape" ? "col-span-2" : "col-span-1"}
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
