export interface StatItem {
	value: string;
	label: string;
}

export interface BlogPost {
	id: string;
	title: string;
	image: string;
	videoId: string; // Vimeo video embed ID
	videoAspect?: "landscape" | "portrait";
	stats: [StatItem, StatItem, StatItem]; // 3 stats section
	client: string;
	category: string;
	readTime: string;
	date: string;
	excerpt: string;
	content: {
		summary: string;
		challenge: string;
		strategy: string[];
		creativeHook: string;
		execution: string;
		conclusion: string;
	};
}

export const blogPosts: BlogPost[] = [
	{
		id: "1",
		title: "From Scroll-Stop to Checkout: Sisters Republic's Viral Fairy Tale Campaign",
		image: "/blog/linkedin-thumb-1.jpg",
		videoId: "881686470",
		videoAspect: "landscape",
		client: "Sisters Republic",
		category: "TikTok Ads & E-Commerce",
		readTime: "4 min read",
		date: "October 2026",
		excerpt:
			"Flipping taboos and fairy tale tropes to create a viral sensation that exceeded all performance expectations.",
		stats: [
			{ value: "+140%", label: "CTR Increase" },
			{ value: "-32%", label: "CAC Reduction" },
			{ value: "2.4M+", label: "Paid Impressions" },
		],
		content: {
			summary:
				"In the crowded period-care category, consumer trust is everything. By subverting the classic Little Red Riding Hood story with comedic self-awareness and direct visual demonstrations, we broke advertising codes and created an unforgettable social campaign.",
			challenge:
				"Sisters Republic wanted to capture market share on social platforms where audiences instantly sniff out staged testimonials. Traditional commercials failed to convert because viewers tuned out generic messaging and blue-liquid cliches.",
			strategy: [
				"Ditch blue liquids and sanitised language in favor of relatable cultural satire.",
				"Script subversive character dynamics challenging puritanical taboos.",
				"Highlight organic French manufacturing, all-day comfort, and 12-hour leak protection.",
			],
			creativeHook:
				"Little Red Riding Hood meeting a wolf in the woods, only for the wolf to pitch corporate tampon tech—until a modern Sister steps in to showcase washable period undies.",
			execution:
				"We filmed in a stylized forest setting with cinematic lighting, dynamic handheld angles, and witty banter, delivering an engaging narrative that felt like an entertaining sketch rather than a traditional ad.",
			conclusion:
				"When products challenge status-quo habits, entertainment and boldness triumph over dry lecturing. By giving genuine entertainment value to viewers, Sisters Republic built lasting brand recall and high conversion rates.",
		},
	},
	{
		id: "2",
		title: "The Butt Dinner: The Viral Satirical Ad That Slashed Boku's CAC by 38%",
		image: "/blog/linkedin-thumb-2.jpg",
		videoId: "851884840",
		videoAspect: "landscape",
		client: "Boku",
		category: "Creative Strategy & UGC",
		readTime: "5 min read",
		date: "September 2026",
		excerpt:
			"Transforming sensitive bathroom hygiene topics into viral, self-aware entertainment that crushed customer acquisition costs.",
		stats: [
			{ value: "-38%", label: "Lower CAC" },
			{ value: "3.6x", label: "Blended ROAS" },
			{ value: "85%", label: "3s View Rate" },
		],
		content: {
			summary:
				"Talking about bathroom hygiene is notoriously sensitive on social advertising networks. By leaning into self-aware, witty, and educational satire, we transformed a taboo subject into a viral social campaign that scaled conversion volumes exponentially.",
			challenge:
				"Boku's modern eco-friendly bidet attachment offers superior hygiene and reduces toilet paper waste. The core marketing challenge was overcoming ingrained cultural habits and ad platform policy sensitivities without sounding clinical or embarrassing potential customers.",
			strategy: [
				"De-stigmatize the conversation through playful analogies (e.g., 'If a bird pooped on your arm, would you just wipe it with dry paper?').",
				"Leverage authentic creator personalities with unscripted first-impression reaction formats.",
				"Emphasize tool-free, 10-minute installation through fast-paced time-lapse visual proof.",
			],
			creativeHook:
				"A dinner table setting where characters candidly debate everyday hygiene habits with deadpan humor, asking why anyone would wipe a dirty plate with dry paper.",
			execution:
				"We crafted an absurd yet relatable dining scenario featuring sharp comedic pacing, rich color palettes, and natural sound design that stopped feeds and ignited lively comment section debates.",
			conclusion:
				"Direct, bold metaphors eliminate friction around taboo products. When creators address the real objections with warmth and comedic timing, customers feel empowered rather than self-conscious about taking action.",
		},
	},
	{
		id: "3",
		title: "Ce en quoi nous croyons: The Viral Self-Hypnosis Campaign for Deep Belief",
		image: "/blog/linkedin-thumb-3.jpg",
		videoId: "769455742",
		videoAspect: "landscape",
		client: "Deep Belief",
		category: "Wellbeing & Mindset",
		readTime: "5 min read",
		date: "August 2026",
		excerpt:
			"How cinematic storytelling and subconscious reprogramming concepts unlocked viral engagement for self-hypnosis.",
		stats: [
			{ value: "4.2x", label: "Campaign ROAS" },
			{ value: "+65%", label: "Conversion Rate" },
			{ value: "450K+", label: "Shares & Saves" },
		],
		content: {
			summary:
				"Communicating abstract concepts like mindset reprogramming and self-hypnosis demands arresting visual storytelling. We crafted a cinematic narrative exploring inner self-talk that captivated audiences across French social media.",
			challenge:
				"Mental wellbeing and self-hypnosis apps often struggle to visualize intangible benefits without feeling overly clinical or mystical. Deep Belief needed video creative that felt grounded, psychologically resonant, and immediately intriguing.",
			strategy: [
				"Visualize psychological reflection and subconscious self-talk through symbolic mirror reflections and cinematic duality.",
				"Lead with universal everyday doubts and self-sabotaging thought patterns.",
				"Demonstrate guided auditory sessions as accessible, daily empowerment routines.",
			],
			creativeHook:
				"A character confronting their own reflection as it talks back, illustrating how the beliefs we hold quietly shape our everyday reality.",
			execution:
				"Using atmospheric lighting, intimate close-ups, and immersive soundscapes, we captured emotional depth and subconscious tension, making self-hypnosis feel tangible, modern, and inspiring.",
			conclusion:
				"When selling personal transformation, emotion and cinematic immersion create connection. Grounding psychological insight in recognizable human moments drives genuine action.",
		},
	},
	/*
	{
		id: "4",
		title: "Gamified Video Formats: Scaling Lingoda's European Language Challenges",
		image: "/blog/case-4.jpg",
		videoId: "769455742",
		videoAspect: "landscape",
		client: "Lingoda",
		category: "Brand Performance & EdTech",
		readTime: "5 min read",
		date: "July 2026",
		excerpt:
			"Interactive 'test your fluency' game shows on short-form video that invited active viewer participation and record trial signups.",
		stats: [
			{ value: "1.8M+", label: "Video Views" },
			{ value: "+88%", label: "Sprint Signups" },
			{ value: "82%", label: "Watch Retention" },
		],
		content: {
			summary:
				"Online language learning ads frequently suffer from boring lecture visuals and passive testimonials. We introduced interactive 'test your fluency' game shows on short-form video that invited active viewer participation and drove record trial signups.",
			challenge:
				"Lingoda's intensive Language Sprints are proven learning accelerators, but communicating the speed of progress in a 20-second video format is notoriously difficult. Past ads felt too serious and failed to engage younger European professionals.",
			strategy: [
				"Build gamified, split-screen rapid-fire quiz challenges that force the viewer to guess pronunciation before the buzzer.",
				"Showcase real bilingual mentors gently correcting funny everyday accent slips in real time.",
				"Highlight the ultimate life benefits: ordering effortlessly in Rome, landing foreign tech jobs, and traveling solo.",
			],
			creativeHook:
				"A ticking 3-second countdown with native speakers challenging viewers: 'Only 5% of non-natives can pronounce this French menu item on the first try. Ready?'",
			execution:
				"We filmed across multilingual talent pools in Paris and Berlin, creating an energetic street-interview and interactive digital game show aesthetic. Fast sound design, interactive captions, and instant answer reveals kept average watch time above 82%.",
			conclusion:
				"Gamifying the initial 5 seconds transforms passive consumers into active participants. When viewers interact with the content mentally before the pitch arrives, conversion barriers vanish.",
		},
	},
	*/
];
