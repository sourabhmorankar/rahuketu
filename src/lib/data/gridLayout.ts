// Comprehensive grid layout data
export const gridLayout = {
	// Inner circle cards (core content)
	innerCards: [
		{ id: 'bio', type: 'BioCard', position: { x: 5, y: 5 }, size: '2x2', color: '#6366f1' },
		{ id: 'skills', type: 'SkillTree', position: { x: 7, y: 5 }, size: '2x2', color: '#f8fafc' },
		{ id: 'experience', type: 'ExperienceMap', position: { x: 3, y: 5 }, size: '2x1', color: '#fefefe' },
		{ id: 'highlights', type: 'Highlights', position: { x: 5, y: 3 }, size: '2x1', color: '#f59e0b' },
		{ id: 'contact', type: 'ContactCard', position: { x: 3, y: 6 }, size: '1x2', color: '#10b981' },
		{ id: 'project', type: 'ProjectShowcase', position: { x: 7, y: 7 }, size: '2x2', color: '#8b5cf6' },
		{ id: 'social', type: 'SocialTray', position: { x: 4, y: 6 }, size: '1x2', color: '#06b6d4' },
		{ id: 'news', type: 'NewsTicker', position: { x: 5, y: 7 }, size: '2x1', color: '#1f2937' },
		{ id: 'mood', type: 'MoodCard', position: { x: 3, y: 4 }, size: '1x1', color: '#f97316' },
		{ id: 'resume', type: 'ResumeCard', position: { x: 4, y: 4 }, size: '1x1', color: '#dc2626' },
		{ id: 'photos', type: 'PhotoCard', position: { x: 9, y: 5 }, size: '1x2', color: '#7c3aed' },
		{ id: 'asks', type: 'AsksCard', position: { x: 9, y: 7 }, size: '1x1', color: '#059669' },
		{ id: 'faq', type: 'FAQCard', position: { x: 9, y: 8 }, size: '1x1', color: '#0891b2' }
	],

	// Outer circle cards (dynamic content)
	outerCards: [
		// Top row
		{ id: 'blog1', type: 'BlogCard', position: { x: 2, y: 2 }, size: '1x2', color: '#ffffff' },
		{ id: 'blog2', type: 'BlogCard', position: { x: 3, y: 2 }, size: '1x2', color: '#ffffff' },
		{ id: 'blog3', type: 'BlogCard', position: { x: 4, y: 2 }, size: '2x1', color: '#ffffff' },
		{ id: 'blog4', type: 'BlogCard', position: { x: 6, y: 2 }, size: '1x2', color: '#ffffff' },
		{ id: 'blog5', type: 'BlogCard', position: { x: 7, y: 2 }, size: '2x1', color: '#ffffff' },
		{ id: 'blog6', type: 'BlogCard', position: { x: 9, y: 2 }, size: '1x2', color: '#ffffff' },
		{ id: 'blog7', type: 'BlogCard', position: { x: 10, y: 2 }, size: '1x1', color: '#ffffff' },
		{ id: 'blog8', type: 'BlogCard', position: { x: 10, y: 3 }, size: '1x1', color: '#ffffff' },

		// Bottom row
		{ id: 'blog9', type: 'BlogCard', position: { x: 2, y: 9 }, size: '1x1', color: '#ffffff' },
		{ id: 'blog10', type: 'BlogCard', position: { x: 3, y: 9 }, size: '2x1', color: '#ffffff' },
		{ id: 'blog11', type: 'BlogCard', position: { x: 5, y: 9 }, size: '1x1', color: '#ffffff' },
		{ id: 'blog12', type: 'BlogCard', position: { x: 6, y: 9 }, size: '1x1', color: '#ffffff' },
		{ id: 'blog13', type: 'BlogCard', position: { x: 7, y: 9 }, size: '2x1', color: '#ffffff' },
		{ id: 'blog14', type: 'BlogCard', position: { x: 9, y: 9 }, size: '1x1', color: '#ffffff' },
		{ id: 'blog15', type: 'BlogCard', position: { x: 10, y: 9 }, size: '1x1', color: '#ffffff' },

		// Left column
		{ id: 'blog16', type: 'BlogCard', position: { x: 1, y: 3 }, size: '1x1', color: '#ffffff' },
		{ id: 'blog17', type: 'BlogCard', position: { x: 1, y: 4 }, size: '1x2', color: '#ffffff' },
		{ id: 'blog18', type: 'BlogCard', position: { x: 1, y: 6 }, size: '1x1', color: '#ffffff' },
		{ id: 'blog19', type: 'BlogCard', position: { x: 1, y: 7 }, size: '1x1', color: '#ffffff' },
		{ id: 'blog20', type: 'BlogCard', position: { x: 1, y: 8 }, size: '1x1', color: '#ffffff' },

		// Right column  
		{ id: 'blog21', type: 'BlogCard', position: { x: 11, y: 3 }, size: '1x2', color: '#ffffff' },
		{ id: 'blog22', type: 'BlogCard', position: { x: 11, y: 5 }, size: '1x1', color: '#ffffff' },
		{ id: 'blog23', type: 'BlogCard', position: { x: 11, y: 6 }, size: '1x1', color: '#ffffff' },
		{ id: 'blog24', type: 'BlogCard', position: { x: 11, y: 7 }, size: '1x2', color: '#ffffff' }
	]
};