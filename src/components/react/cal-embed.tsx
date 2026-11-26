import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

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
		(async () => {
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
		<div className="w-full overflow-hidden [&_iframe]:max-w-full [&_iframe]:overflow-hidden">
			<Cal
				namespace={namespace}
				calLink={calLink}
				calOrigin={calOrigin}
				style={{
					width: "100%",
					height: "100%",
					overflow: "hidden",
				}}
				config={{ layout: "month_view", theme: "light" }}
			/>
		</div>
	);
}
