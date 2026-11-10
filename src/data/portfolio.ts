export type Category = "All" | "Health" | "Beauty" | "IT" | "Fitness";

export interface VideoItem {
	id: string;
	title: string;
	aspect: "portrait" | "landscape";
	span: string;
	category: Exclude<Category, "All">;
}

export interface BentoSection {
	id?: string;
	heading: string;
	subheading: string;
	leftVideos: VideoItem[];
	rightVideos: VideoItem[];
}

export const CATEGORIES: Category[] = ["All", "Health", "Beauty", "IT", "Fitness"];

export const portfolioSections: BentoSection[] = [
	{
		id: "featured-highlights",
		heading: "Featured Highlights",
		subheading: "High-impact social campaigns and commercials",
		leftVideos: [
			{ id: "1011950908", title: "900 | Matrix", aspect: "portrait", span: "col-span-1", category: "Beauty" },
			{ id: "1011954936", title: "900 | Trump", aspect: "portrait", span: "col-span-1", category: "Health" },
			{ id: "769455742", title: "Deep Belief", aspect: "landscape", span: "col-span-2", category: "IT" },
		],
		rightVideos: [
			{ id: "881686470", title: "Sisters Republic | Chaperon Rouge", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "1011936857", title: "900 | Baywatch", aspect: "portrait", span: "col-span-1", category: "Fitness" },
			{ id: "1011968294", title: "900 | Dealers", aspect: "portrait", span: "col-span-1", category: "Beauty" },
		],
	},
	{
		id: "creative-spotlight",
		heading: "Creative Spotlight",
		subheading: "Engaging stories and narrative video formats",
		leftVideos: [
			{ id: "1011953182", title: "900 | Thanos", aspect: "portrait", span: "col-span-1", category: "Fitness" },
			{ id: "1011965145", title: "Boku | Pshiit", aspect: "portrait", span: "col-span-1", category: "Health" },
			{ id: "918612476", title: "Boku | Alien", aspect: "landscape", span: "col-span-2", category: "Beauty" },
			{ id: "1051332477", title: "Kolsquare | Influencer Marketing", aspect: "landscape", span: "col-span-2", category: "IT" },
		],
		rightVideos: [
			{ id: "882848412", title: "Sisters Republic | Barbie", aspect: "landscape", span: "col-span-2", category: "Beauty" },
			{ id: "851884840", title: "Boku | Diner de C*l", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "1011969359", title: "Boku | Metro", aspect: "portrait", span: "col-span-1", category: "Fitness" },
			{ id: "1011924278", title: "900 | Cemetery", aspect: "portrait", span: "col-span-1", category: "IT" },
		],
	},
	{
		id: "brand-originals",
		heading: "Brand Originals",
		subheading: "Short-form content crafted for modern audiences",
		leftVideos: [
			{ id: "918597931", title: "Caats | Chanson", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "1051884000", title: "Bourse aux Livres | Appart", aspect: "portrait", span: "col-span-1", category: "IT" },
			{ id: "1011927125", title: "900 | Histoire Gel Douche", aspect: "portrait", span: "col-span-1", category: "Beauty" },
		],
		rightVideos: [
			{ id: "918611255", title: "Boku | A**holes Anonymous", aspect: "landscape", span: "col-span-2", category: "Fitness" },
			{ id: "1064022854", title: "Spliiit | Scooter", aspect: "portrait", span: "col-span-1", category: "IT" },
			{ id: "1064022944", title: "Spliiit | Newspaper", aspect: "portrait", span: "col-span-1", category: "Fitness" },
		],
	},
	{
		id: "performance-ads",
		heading: "Performance Ads",
		subheading: "Conversion-driven video assets for direct response channels",
		leftVideos: [
			{ id: "918615056", title: "Caats | Divorce", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "803440545", title: "Sisters Republic | Big Tampon", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "1070075917", title: "BAL | Shakespeare", aspect: "portrait", span: "col-span-1", category: "IT" },
			{ id: "1064773352", title: "Luminette | Cafe", aspect: "portrait", span: "col-span-1", category: "Health" },
		],
		rightVideos: [
			{ id: "883199596", title: "Sisters Republic | Dracula", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "1064023033", title: "Spliiit | Movie", aspect: "portrait", span: "col-span-1", category: "IT" },
			{ id: "1064023139", title: "Spliiit | Metro", aspect: "portrait", span: "col-span-1", category: "IT" },
			{ id: "882908386", title: "LivLab | Fight or Flight", aspect: "landscape", span: "col-span-2", category: "Health" },
		],
	},
	{
		id: "growth-campaigns",
		heading: "Growth Campaigns",
		subheading: "Creative concepts engineered for scaling paid media",
		leftVideos: [
			{ id: "1050836182", title: "LillySkin | Apocalypse", aspect: "portrait", span: "col-span-1", category: "Beauty" },
			{ id: "1011937505", title: "900 | Rap Battle", aspect: "portrait", span: "col-span-1", category: "Beauty" },
			{ id: "882843574", title: "Sisters Republic | Viva la Vida", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "882851473", title: "HoomKid | The Boy who wouldn't Sleep", aspect: "landscape", span: "col-span-2", category: "Health" },
		],
		rightVideos: [
			{ id: "308999949", title: "Tutoroo | Chinese Girl", aspect: "landscape", span: "col-span-2", category: "IT" },
			{ id: "842998916", title: "Odass | Plafond de Verre", aspect: "landscape", span: "col-span-2", category: "Beauty" },
			{ id: "918602377", title: "Boku | Vicki Christina", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "1070075958", title: "Bourse aux Livres | Comte", aspect: "portrait", span: "col-span-1", category: "IT" },
		],
	},
	{
		id: "visual-storytelling",
		heading: "Visual Storytelling",
		subheading: "High-production visual narratives and brand stories",
		leftVideos: [
			{ id: "1012750675", title: "Lilly Skin | Conduite", aspect: "portrait", span: "col-span-1", category: "Beauty" },
			{ id: "516288773", title: "Redneck uses Gargoyles", aspect: "landscape", span: "col-span-2", category: "Fitness" },
			{ id: "1011965990", title: "Sisters Republic | Forest", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "918610393", title: "Boku | Cartel PQ", aspect: "landscape", span: "col-span-2", category: "Health" },
		],
		rightVideos: [
			{ id: "1064773407", title: "Luminette | Toothpaste", aspect: "portrait", span: "col-span-1", category: "Health" },
			{ id: "1011963419", title: "Boku | Homme", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "717268755", title: "PAPS | Hobbit", aspect: "landscape", span: "col-span-2", category: "IT" },
			{ id: "1011951880", title: "900 | Débat Legislatives", aspect: "portrait", span: "col-span-1", category: "Beauty" },
		],
	},
	{
		id: "commercial-impact",
		heading: "Commercial Impact",
		subheading: "High-impact commercials and broadcast formats",
		leftVideos: [
			{ id: "923244519", title: "Caats | Simon", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "809020714", title: "Dodow | Sleepless Beauty", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "882838079", title: "Sisters Republic| Bella Ciao", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "923267697", title: "Sisters Republic | Cigarette", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "242476849", title: "Université Paris Saclay | Candidate", aspect: "landscape", span: "col-span-2", category: "IT" },
		],
		rightVideos: [
			{ id: "1064594883", title: "Spliiit | Toothbrush", aspect: "portrait", span: "col-span-1", category: "IT" },
			{ id: "918615629", title: "900 | Cascadeuse", aspect: "landscape", span: "col-span-2", category: "Beauty" },
			{ id: "923244519", title: "Caats | Simon", aspect: "landscape", span: "col-span-2", category: "Health" },
			{ id: "497622636", title: "Gargoyles | Masculinité Toxique", aspect: "landscape", span: "col-span-2", category: "Fitness" },
			{ id: "84254035", title: "Multilangues | iRabbit", aspect: "landscape", span: "col-span-2", category: "IT" },
		],
	},
];
