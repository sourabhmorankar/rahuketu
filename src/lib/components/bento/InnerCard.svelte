<script lang="ts">
	import { useGrid } from '../../state/grid.svelte.js';
	import BioCard from './cards/BioCard.svelte';
	import SkillTree from './cards/SkillTree.svelte';
	import ExperienceMap from './cards/ExperienceMap.svelte';
	import Highlights from './cards/Highlights.svelte';
	import PhotoBooth from './cards/PhotoBooth.svelte';
	import RahulAsks from './cards/RahulAsks.svelte';
	import AskRahul from './cards/AskRahul.svelte';
	import MoodIndicator from './cards/MoodIndicator.svelte';
	import NewsMarquee from './cards/NewsMarquee.svelte';
	import SocialTray from './cards/SocialTray.svelte';
	import ContactRahul from './cards/ContactRahul.svelte';
	import ResumeDownload from './cards/ResumeDownload.svelte';
	import FeaturedAreaOne from './cards/FeaturedAreaOne.svelte';
	import FeaturedAreaTwo from './cards/FeaturedAreaTwo.svelte';
	import FeaturedAreaThree from './cards/FeaturedAreaThree.svelte';

	let { card } = $props();
	const grid = useGrid();

	const isSelected = $derived(grid.selected === card.id);
	const transform = $derived(`translate(${card.position.x * 200}px, ${card.position.y * 200}px)`);

	function handleClick() {
		grid.selectCard(card.id);
	}

	function getCardComponent(type: string) {
		switch (type) {
			case 'bioCard':
				return BioCard;
			case 'skillTree':
				return SkillTree;
			case 'experienceMap':
				return ExperienceMap;
			case 'highlights':
				return Highlights;
			case 'photoBooth':
				return PhotoBooth;
			case 'rahulAsks':
				return RahulAsks;
			case 'askRahul':
				return AskRahul;
			case 'moodIndicator':
				return MoodIndicator;
			case 'newsMarquee':
				return NewsMarquee;
			case 'socialTray':
				return SocialTray;
			case 'contactRahul':
				return ContactRahul;
			case 'resumeDownload':
				return ResumeDownload;
			case 'featuredAreaOne':
				return FeaturedAreaOne;
			case 'featuredAreaTwo':
				return FeaturedAreaTwo;
			case 'featuredAreaThree':
				return FeaturedAreaThree;
			default:
				return BioCard;
		}
	}

	const CardComponent = $derived(getCardComponent(card.type));
</script>

<div
	class="inner-card size-{card.size}"
	class:selected={isSelected}
	style="transform: {transform}"
	onclick={handleClick}
	onkeydown={(e) => e.key === 'Enter' && handleClick()}
	role="button"
	tabindex="0"
>
	<CardComponent {card} />
</div>

<style>
	.inner-card {
		position: absolute;
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		cursor: pointer;
	}
	
	.inner-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
	}
	
	.inner-card.selected {
		z-index: 10;
		box-shadow: 0 0 0 3px #3b82f6;
	}
	
	.size-1x1 { width: 180px; height: 180px; }
	.size-1x2 { width: 180px; height: 380px; }
	.size-2x1 { width: 380px; height: 180px; }
	.size-2x2 { width: 380px; height: 380px; }
	.size-3x1 { width: 580px; height: 180px; }
</style>