<script>
	import { useGrid } from '../../state/grid.svelte.js';
	import BioCard from './cards/BioCard.svelte';
	
	let { card } = $props();
	const grid = useGrid();
	
	const isSelected = $derived(grid.selected === card.id);
	const transform = $derived(`translate(${card.position.x * 200}px, ${card.position.y * 200}px)`);
	
	function handleClick() {
		grid.selectCard(card.id);
	}
	
	function getCardComponent(type) {
		switch (type) {
			case 'bioCard':
				return BioCard;
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