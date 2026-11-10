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
		title: "How a 3-Second Visual Hook Drove a +140% CTR Surge for 900.care",
		image: "/blog/case-1.jpg",
		videoId: "1011950908",
		videoAspect: "portrait",
		client: "900.care",
		category: "Paid Social & Direct Response",
		readTime: "4 min read",
		date: "October 2026",
		excerpt:
			"Flipping consumer skepticism on its head in 3 seconds to slash cost-per-click and scale refillable personal care.",
		stats: [
			{ value: "+140%", label: "CTR Increase" },
			{ value: "-32%", label: "CAC Reduction" },
			{ value: "2.4M+", label: "Paid Impressions" },
		],
		content: {
			summary:
				"Eco-friendly refillable personal care brands often struggle with repetitive 'save the planet' tropes that users tune out. By flipping consumer skepticism on its head within the first 3 seconds, we produced video formats that commanded attention and radically slashed cost-per-click.",
			challenge:
				"900.care had achieved product-market fit with their refillable shower gels and deodorant sticks. However, customer acquisition costs on Meta and TikTok were creeping upwards as standard product showcases hit creative fatigue. They needed video creative that could stop rapid doom-scrolling and make the refill concept feel irresistibly intuitive in everyday life.",
			strategy: [
				"Abandon conventional guilt-tripping sustainability messaging in favor of comedic everyday bathroom mishaps.",
				"Script 8 distinct pattern-interrupt hooks using rapid visual contrasts and tactile product sound design.",
				"Employ high-energy split-screen comparisons illustrating 1 tiny refill tablet dissolving versus carrying bulky plastic bottles.",
			],
			creativeHook:
				"Opening on an actor frantically balancing 14 giant plastic shampoo bottles that inevitably crash down, followed by a cut to slipping a 5-gram tablet into water with an ASMR pop sound effect.",
			execution:
				"We filmed across three stylized domestic settings using a hybrid production style: high-grade cinema glass for crisp product close-ups mixed with dynamic handheld camera work that feels native to TikTok and Instagram Reels. We delivered 16 modular variations for multivariate testing.",
			conclusion:
				"When selling innovation, simplicity and unexpected humor triumph over heavy lecturing. By pinpointing the single most visual product feature—the dissolving tablet—and wrapping it in relatable chaos, 900.care unlocked their most efficient paid acquisition quarter to date.",
		},
	},
	{
		id: "2",
		title: "The Native UGC Formula That Reduced Boku's Customer Acquisition Cost by 38%",
		image: "/blog/case-2.jpg",
		videoId: "918612476",
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
				"A creator holding a jar of Nutella, smearing it on a plate, attempting to wipe it with dry paper towel, and asking: 'Would you eat off this plate now? So why do you trust dry paper with your butt?'",
			execution:
				"We designed a multi-creator campaign featuring diverse living spaces—from compact Parisian student apartments to modern family bathrooms. Rapid transitions, on-screen dynamic typography, and natural room acoustics made each video feel like a friend's organic recommendation rather than an ad.",
			conclusion:
				"Direct, bold metaphors eliminate friction around taboo products. When creators address the real objections with warmth and comedic timing, customers feel empowered rather than self-conscious about taking action.",
		},
	},
	{
		id: "3",
		title: "From Scroll-Stop to Checkout: Sisters Republic's 4.2x ROAS TikTok Blueprint",
		image: "/blog/case-3.jpg",
		videoId: "881686470",
		videoAspect: "landscape",
		client: "Sisters Republic",
		category: "TikTok Ads & E-Commerce",
		readTime: "6 min read",
		date: "August 2026",
		excerpt:
			"How transparent zero-leak absorbency tests and creator honesty produced a record-breaking 4.2x TikTok ROAS campaign.",
		stats: [
			{ value: "4.2x", label: "Campaign ROAS" },
			{ value: "+65%", label: "Conversion Rate" },
			{ value: "450K+", label: "Shares & Saves" },
		],
		content: {
			summary:
				"In the crowded period-care category, consumer trust is everything. We engineered a high-velocity video framework based on transparent absorbency stress-tests, zero-leak demonstrations, and relatable day-in-the-life routines.",
			challenge:
				"Sisters Republic wanted to capture market share on TikTok, where audiences demand extreme authenticity and instantly sniff out staged testimonials. Traditional beauty commercials failed to convert because viewers doubted real-world leak protection.",
			strategy: [
				"Create direct visual evidence: pouring measured liquid over the underwear in macro detail to display immediate absorption.",
				"Address taboo comfort questions head-on: odor control, washing ease, and sport performance.",
				"Integrate seamless CTA timing coordinated with TikTok sound trends and native text overlays.",
			],
			creativeHook:
				"A bold cut straight into pouring a cup of blue test liquid onto ultra-thin underwear while an authentic voiceover asks: 'Can 2mm of fabric really hold 4 tampons worth of fluid?'",
			execution:
				"Filming across athletic, work, and sleep scenarios, we paired aesthetic macro lighting with unvarnished honesty. Creators demonstrated washing the garments under a running tap to eliminate the friction of post-purchase maintenance.",
			conclusion:
				"When products make bold performance promises, show, don't tell. Visually indisputable demonstrations combined with genuine creator advocacy build the bridge from casual viewer curiosity to immediate checkout confidence.",
		},
	},
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
];
