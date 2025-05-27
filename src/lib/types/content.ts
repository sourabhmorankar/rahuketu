export type InnerCardType = 
	| 'bioCard'
	| 'skillTree'
	| 'experienceMap'
	| 'highlights'
	| 'photoBooth'
	| 'rahulAsks'
	| 'askRahul'
	| 'moodIndicator'
	| 'newsMarquee'
	| 'socialTray'
	| 'contactRahul'
	| 'resumeDownload'
	| 'featuredAreaOne'
	| 'featuredAreaTwo'
	| 'featuredAreaThree';

export type OuterCardType =
	| 'blogArticle'
	| 'caseStudy'
	| 'socialEmbed'
	| 'photoUpdate'
	| 'clientTestimonial'
	| 'breakingNews';

export type ContentStatus = 'draft' | 'published' | 'archived';

export interface EnhancedImage {
	readonly src: string;
	readonly alt: string;
	readonly width: number;
	readonly height: number;
	readonly formats: {
		readonly webp?: string;
		readonly avif?: string;
	};
	readonly srcset: string;
}

export interface SEOMetadata {
	readonly title: string;
	readonly description: string;
	readonly keywords: readonly string[];
	readonly ogImage?: string;
	readonly canonicalUrl?: string;
}

export interface Author {
	readonly id: string;
	readonly name: string;
	readonly email: string;
	readonly bio?: string;
	readonly avatar?: EnhancedImage;
}