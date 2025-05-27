<script lang="ts">
	import { useGrid } from '../../state/grid.svelte';
	import { useUI } from '../../state/ui.svelte';
	import InnerCard from './InnerCard.svelte';
	import type { Card } from '../../types/card';

	let { cards } = $props<{ cards: Card[] }>();

	const grid = useGrid();
	const ui = useUI();

	let innerCards = $derived(cards.map((card: Card) => ({ ...card, width: card.width ?? 1, height: card.height ?? 1 })));

	let gridContainer: HTMLButtonElement;

	let isDragging = false;
	let lastPosition = { x: 0, y: 0 };

	$effect(() => {
		grid.setViewport({ width: gridContainer.offsetWidth, height: gridContainer.offsetHeight });
	});

	function handleMouseDown(event: MouseEvent) {
		if (event.button === 0) {
			isDragging = true;
			lastPosition = { x: event.clientX, y: event.clientY };
			gridContainer.style.cursor = 'grabbing';
		}
	}

	function handleMouseMove(event: MouseEvent) {
		if (isDragging) {
			const dx = event.clientX - lastPosition.x;
			const dy = event.clientY - lastPosition.y;
			grid.move(dx, dy);
			lastPosition = { x: event.clientX, y: event.clientY };
		}
	}

	function handleMouseUp() {
		isDragging = false;
		gridContainer.style.cursor = 'grab';
	}

	function handleWheel(event: WheelEvent) {
		event.preventDefault();
		const scaleAmount = -event.deltaY * 0.001;
		grid.zoomBy(scaleAmount);
	}

	function handleKeyDown(event: KeyboardEvent) {
		const moveAmount = 50;
		switch (event.key) {
			case 'ArrowUp':
				grid.move(0, moveAmount);
				break;
			case 'ArrowDown':
				grid.move(0, -moveAmount);
				break;
			case 'ArrowLeft':
				grid.move(moveAmount, 0);
				break;
			case 'ArrowRight':
				grid.move(-moveAmount, 0);
				break;
		}
	}
</script>

<svelte:window on:mouseup={handleMouseUp} on:mousemove={handleMouseMove} />

<button
	bind:this={gridContainer}
	class="bento-grid"
	onmousedown={handleMouseDown}
	onwheel={handleWheel}
	onkeydown={handleKeyDown}
	aria-label="Interactive bento grid"
	tabindex="0"
	style="transform: translate({-grid.position.x}px, {-grid.position.y}px) scale({grid.zoom})"
>
	{#each innerCards as card (card.id)}
		<InnerCard {card} />
	{/each}
</button>

<style>
	.bento-grid {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		cursor: grab;
		transform-origin: 0 0;
		will-change: transform;
	}
</style>