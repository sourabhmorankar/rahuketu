<script lang="ts">
	import BentoGrid from '$lib/components/bento/BentoGrid.svelte';
	import ActionIcons from '$lib/components/navigation/ActionIcons.svelte';
	import MiniMap from '$lib/components/navigation/MiniMap.svelte';
	
	// Import all card components
	import BioCard from '$lib/components/bento/cards/BioCard.svelte';
	import SkillTree from '$lib/components/bento/cards/SkillTree.svelte';
	import ExperienceMap from '$lib/components/bento/cards/ExperienceMap.svelte';
	import Highlights from '$lib/components/bento/cards/Highlights.svelte';
	import ContactCard from '$lib/components/bento/cards/ContactCard.svelte';
	import ProjectShowcase from '$lib/components/bento/cards/ProjectShowcase.svelte';
	import SocialTray from '$lib/components/bento/cards/SocialTray.svelte';
	import NewsTicker from '$lib/components/bento/cards/NewsTicker.svelte';
	import MoodCard from '$lib/components/bento/cards/MoodCard.svelte';
	import ResumeCard from '$lib/components/bento/cards/ResumeCard.svelte';
	import PhotoCard from '$lib/components/bento/cards/PhotoCard.svelte';
	import AsksCard from '$lib/components/bento/cards/AsksCard.svelte';
	import FAQCard from '$lib/components/bento/cards/FAQCard.svelte';
	import BlogCard from '$lib/components/bento/cards/BlogCard.svelte';
	
	import { mockData } from '$lib/data/mockData.ts';

	// Grid state management
	let gridPosition = $state({ x: -800, y: -600 });
	let zoomLevel = $state(0.85);
	let isDragging = $state(false);
	let dragStart = $state({ x: 0, y: 0 });

	const MIN_ZOOM = 0.3;
	const MAX_ZOOM = 2;

	// Vibrant color palette inspired by reference images
	const colors = {
		coral: '#FF6B6B',
		yellow: '#FFD93D',
		mint: '#6BCF7F',
		purple: '#A78BFA',
		pink: '#EC4899',
		orange: '#FB923C',
		teal: '#14B8A6',
		indigo: '#6366F1',
		blue: '#3B82F6',
		green: '#10B981',
		red: '#EF4444',
		gray: '#6B7280',
		dark: '#1F2937',
		light: '#F3F4F6'
	};

	// Comprehensive grid layout with varied sizes and vibrant colors
	const allCards = [
		// Inner circle - Core Rahul content
		{ id: 'bio', component: BioCard, position: { x: 8, y: 8 }, size: '2x2', color: colors.light, isCore: true },
		{ id: 'skills', component: SkillTree, position: { x: 10, y: 8 }, size: '2x2', color: colors.green, isCore: true },
		{ id: 'experience', component: ExperienceMap, position: { x: 6, y: 8 }, size: '2x3', color: colors.yellow, isCore: true },
		{ id: 'highlights', component: Highlights, position: { x: 8, y: 6 }, size: '3x2', color: colors.orange, isCore: true },
		{ id: 'contact', component: ContactCard, position: { x: 11, y: 10 }, size: '2x2', color: colors.light, isCore: true },
		{ id: 'project', component: ProjectShowcase, position: { x: 8, y: 10 }, size: '3x2', color: colors.purple, isCore: true },
		{ id: 'social', component: SocialTray, position: { x: 5, y: 10 }, size: '3x1', color: colors.pink, isCore: true },
		{ id: 'news', component: NewsTicker, position: { x: 11, y: 6 }, size: '2x2', color: colors.dark, isCore: true },
		{ id: 'mood', component: MoodCard, position: { x: 12, y: 8 }, size: '1x1', color: colors.coral, isCore: true },
		{ id: 'resume', component: ResumeCard, position: { x: 13, y: 8 }, size: '1x1', color: colors.yellow, isCore: true },
		{ id: 'photos', component: PhotoCard, position: { x: 6, y: 11 }, size: '2x2', color: colors.teal, isCore: true },
		{ id: 'asks', component: AsksCard, position: { x: 13, y: 9 }, size: '1x1', color: colors.mint, isCore: true },
		{ id: 'faq', component: FAQCard, position: { x: 13, y: 10 }, size: '1x1', color: colors.indigo, isCore: true },

		// Outer circle - Varied content types with different sizes
		// Top section
		{ id: 'blog1', component: BlogCard, position: { x: 3, y: 3 }, size: '2x2', color: colors.coral },
		{ id: 'blog2', component: BlogCard, position: { x: 5, y: 3 }, size: '2x1', color: colors.yellow },
		{ id: 'blog3', component: BlogCard, position: { x: 7, y: 3 }, size: '1x2', color: colors.light },
		{ id: 'blog4', component: BlogCard, position: { x: 8, y: 3 }, size: '3x1', color: colors.mint },
		{ id: 'blog5', component: BlogCard, position: { x: 11, y: 3 }, size: '2x2', color: colors.purple },
		{ id: 'blog6', component: BlogCard, position: { x: 13, y: 3 }, size: '1x1', color: colors.orange },
		{ id: 'blog7', component: BlogCard, position: { x: 14, y: 3 }, size: '2x1', color: colors.pink },
		{ id: 'blog8', component: BlogCard, position: { x: 5, y: 4 }, size: '1x1', color: colors.teal },
		{ id: 'blog9', component: BlogCard, position: { x: 6, y: 4 }, size: '1x2', color: colors.gray },
		{ id: 'blog10', component: BlogCard, position: { x: 8, y: 4 }, size: '2x1', color: colors.blue },
		{ id: 'blog11', component: BlogCard, position: { x: 10, y: 4 }, size: '1x1', color: colors.red },
		{ id: 'blog12', component: BlogCard, position: { x: 13, y: 4 }, size: '2x2', color: colors.light },

		// Left section
		{ id: 'left1', component: BlogCard, position: { x: 2, y: 5 }, size: '2x2', color: colors.pink },
		{ id: 'left2', component: BlogCard, position: { x: 4, y: 5 }, size: '1x2', color: colors.light },
		{ id: 'left3', component: BlogCard, position: { x: 2, y: 7 }, size: '1x2', color: colors.yellow },
		{ id: 'left4', component: BlogCard, position: { x: 3, y: 7 }, size: '2x1', color: colors.coral },
		{ id: 'left5', component: BlogCard, position: { x: 3, y: 8 }, size: '3x2', color: colors.mint },
		{ id: 'left6', component: BlogCard, position: { x: 2, y: 9 }, size: '1x1', color: colors.purple },
		{ id: 'left7', component: BlogCard, position: { x: 2, y: 10 }, size: '2x2', color: colors.orange },
		{ id: 'left8', component: BlogCard, position: { x: 4, y: 10 }, size: '1x2', color: colors.teal },

		// Right section
		{ id: 'right1', component: BlogCard, position: { x: 15, y: 5 }, size: '2x3', color: colors.blue },
		{ id: 'right2', component: BlogCard, position: { x: 17, y: 5 }, size: '1x1', color: colors.red },
		{ id: 'right3', component: BlogCard, position: { x: 18, y: 5 }, size: '2x2', color: colors.light },
		{ id: 'right4', component: BlogCard, position: { x: 17, y: 6 }, size: '1x2', color: colors.yellow },
		{ id: 'right5', component: BlogCard, position: { x: 15, y: 8 }, size: '1x2', color: colors.coral },
		{ id: 'right6', component: BlogCard, position: { x: 16, y: 8 }, size: '2x1', color: colors.mint },
		{ id: 'right7', component: BlogCard, position: { x: 18, y: 7 }, size: '2x3', color: colors.pink },
		{ id: 'right8', component: BlogCard, position: { x: 16, y: 9 }, size: '2x2', color: colors.purple },
		{ id: 'right9', component: BlogCard, position: { x: 15, y: 10 }, size: '1x1', color: colors.orange },

		// Bottom section
		{ id: 'bottom1', component: BlogCard, position: { x: 3, y: 12 }, size: '3x2', color: colors.teal },
		{ id: 'bottom2', component: BlogCard, position: { x: 6, y: 13 }, size: '2x1', color: colors.gray },
		{ id: 'bottom3', component: BlogCard, position: { x: 8, y: 12 }, size: '1x2', color: colors.blue },
		{ id: 'bottom4', component: BlogCard, position: { x: 9, y: 12 }, size: '2x2', color: colors.red },
		{ id: 'bottom5', component: BlogCard, position: { x: 11, y: 12 }, size: '1x1', color: colors.light },
		{ id: 'bottom6', component: BlogCard, position: { x: 12, y: 12 }, size: '3x2', color: colors.yellow },
		{ id: 'bottom7', component: BlogCard, position: { x: 15, y: 11 }, size: '1x3', color: colors.coral },
		{ id: 'bottom8', component: BlogCard, position: { x: 16, y: 11 }, size: '2x1', color: colors.mint },
		{ id: 'bottom9', component: BlogCard, position: { x: 16, y: 12 }, size: '1x2', color: colors.purple },
		{ id: 'bottom10', component: BlogCard, position: { x: 17, y: 12 }, size: '2x2', color: colors.pink },

		// Fill remaining gaps
		{ id: 'fill1', component: BlogCard, position: { x: 5, y: 6 }, size: '1x1', color: colors.orange },
		{ id: 'fill2', component: BlogCard, position: { x: 5, y: 7 }, size: '1x1', color: colors.teal },
		{ id: 'fill3', component: BlogCard, position: { x: 4, y: 12 }, size: '1x1', color: colors.gray },
		{ id: 'fill4', component: BlogCard, position: { x: 5, y: 12 }, size: '1x1', color: colors.blue },
		{ id: 'fill5', component: BlogCard, position: { x: 11, y: 13 }, size: '1x1', color: colors.red },
		{ id: 'fill6', component: BlogCard, position: { x: 7, y: 5 }, size: '1x1', color: colors.light },
		{ id: 'fill7', component: BlogCard, position: { x: 10, y: 5 }, size: '1x1', color: colors.yellow },
		{ id: 'fill8', component: BlogCard, position: { x: 11, y: 5 }, size: '2x1', color: colors.coral },
		{ id: 'fill9', component: BlogCard, position: { x: 13, y: 5 }, size: '1x1', color: colors.mint },
		{ id: 'fill10', component: BlogCard, position: { x: 14, y: 5 }, size: '1x1', color: colors.purple }
	];

	// Event handlers for pan and zoom
	function handleMouseDown(event: MouseEvent) {
		isDragging = true;
		dragStart = { x: event.clientX - gridPosition.x, y: event.clientY - gridPosition.y };
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isDragging) return;
		event.preventDefault();
		gridPosition = {
			x: event.clientX - dragStart.x,
			y: event.clientY - dragStart.y
		};
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handleWheel(event: WheelEvent) {
		event.preventDefault();
		const delta = event.deltaY > 0 ? -0.1 : 0.1;
		zoomLevel = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomLevel + delta));
	}
</script>

<svelte:head>
	<title>Rahuketu - Rahul Nangare's Digital Space</title>
	<meta name="description" content="Interactive portfolio and blog of Rahul Nangare, Sr Cloud Network & Automation Engineer" />
</svelte:head>

<svelte:window 
	on:mousemove={handleMouseMove} 
	on:mouseup={handleMouseUp}
	on:wheel={handleWheel}
/>

<div class="app-container">
	<div 
		class="grid-viewport"
		on:mousedown={handleMouseDown}
		style="cursor: {isDragging ? 'grabbing' : 'grab'}"
	>		<div 
			class="grid-container"
			style="
				transform: translate({gridPosition.x}px, {gridPosition.y}px) scale({zoomLevel});
				transform-origin: center center;
			"
		>
			{#each allCards as card (card.id)}
				<div 
					class="grid-card size-{card.size}" 
					style="
						grid-column: {card.position.x}; 
						grid-row: {card.position.y};
						background: {card.color || '#ffffff'};
					"
				>
					{#if card.props}
						<svelte:component this={card.component} {...card.props} />
					{:else}
						<svelte:component this={card.component} />
					{/if}
				</div>
			{/each}
		</div>
	</div>
	
	<ActionIcons />
	<MiniMap />
</div>

<style>
	.app-container {
		width: 100vw;
		height: 100vh;
		position: relative;
		overflow: hidden;
		background: #e5e7eb;
		user-select: none;
	}
	
	.grid-viewport {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}
	
	.grid-container {
		display: grid;
		grid-template-columns: repeat(25, 140px);
		grid-template-rows: repeat(20, 140px);
		gap: 16px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform-origin: center center;
		will-change: transform;
		transition: transform 0.1s ease-out;
	}
	
	.grid-card {
		border-radius: 20px;
		overflow: hidden;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		position: relative;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	}

	.grid-card.core {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
		z-index: 2;
	}
	
	.grid-card:hover {
		transform: translateY(-4px) scale(1.02);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
		z-index: 20;
	}

	.grid-card:active {
		transform: translateY(-2px) scale(1.01);
	}
	
	.grid-card.size-1x1 {
		grid-column: span 1;
		grid-row: span 1;
	}
	
	.grid-card.size-1x2 {
		grid-column: span 1;
		grid-row: span 2;
	}

	.grid-card.size-1x3 {
		grid-column: span 1;
		grid-row: span 3;
	}
	
	.grid-card.size-2x1 {
		grid-column: span 2;
		grid-row: span 1;
	}
	
	.grid-card.size-2x2 {
		grid-column: span 2;
		grid-row: span 2;
	}

	.grid-card.size-2x3 {
		grid-column: span 2;
		grid-row: span 3;
	}
	
	.grid-card.size-3x1 {
		grid-column: span 3;
		grid-row: span 1;
	}

	.grid-card.size-3x2 {
		grid-column: span 3;
		grid-row: span 2;
	}
</style>