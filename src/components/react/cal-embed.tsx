import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalEmbedProps {
  /**
   * The Cal.com link (e.g. "username/30min" or "team/event-slug").
   * Defaults to PUBLIC_CAL_LINK from environment or a fallback slug.
   */
  calLink?: string;
  /**
   * Optional custom Cal.com origin for self-hosted instances.
   */
  calOrigin?: string;
  /**
   * Unique namespace for this embed instance.
   */
  namespace?: string;
}

export default function CalEmbed({
  calLink = import.meta.env.PUBLIC_CAL_LINK || "moontajska/30min",
  calOrigin = import.meta.env.PUBLIC_CAL_ORIGIN || "https://cal.com",
  namespace = "30min",
}: CalEmbedProps) {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace });
        cal("ui", {
          theme: "light",
          styles: { branding: { brandColor: "#000000" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (err) {
        console.error("Cal.com embed initialization error:", err);
      }
    })();
  }, [namespace]);

  return (
    <div className="w-full bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4 bg-gray-50/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-medium text-sm">
            30m
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray-900 text-base">30 Min Discovery Call</h3>
            <p className="text-xs text-gray-500">Video call · Free consultation</p>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Availability
        </div>
      </div>

      <div className="w-full min-h-[650px] p-2 sm:p-4">
        <Cal
          namespace={namespace}
          calLink={calLink}
          calOrigin={calOrigin}
          style={{ width: "100%", height: "100%", minHeight: "650px", overflow: "auto" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>
    </div>
  );
}
