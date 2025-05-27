<script>
	import { useGrid } from '../../state/grid.svelte.js';
	import InnerCard from './InnerCard.svelte';
	
	const grid = useGrid();
	
	let gridContainer = $state();
	let isDragging = $state(false);
	let dragStart = $state({ x: 0, y: 0 });
	
	const innerCards = [
		{ id: 'bio', type: 'bioCard', position: { x: 0, y: 0 }, size: '1x2' },
		{ id: 'skills', type: 'skillTree', position: { x: 1, y: 0 }, size: '2x2' },
		{ id: 'experience', type: 'experienceMap', position: { x: 3, y: 0 }, size: '3x1' },
		{ id: 'highlights', type: 'highlights', position: { x: -1, y: 0 }, size: '2x1' }
	];
	
	$effect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				grid.viewport.width = window.innerWidth;
				grid.viewport.height = window.innerHeight;
			};
			
			window.addEventListener('resize', handleResize);
			handleResize();
			
			return () => window.removeEventListener('resize', handleResize);
		}
	});
	
	function handleMouseDown(event) {
		if (event.button === 0) {
			isDragging = true;
			dragStart = { x: event.clientX, y: event.clientY };
		}
	}
	
	function handleMouseMove(event) {
		if (isDragging) {
			const deltaX = event.clientX - dragStart.x;
			const deltaY = event.clientY - dragStart.y;
			
			grid.setPosition({
				x: grid.position.x - deltaX,
				y: grid.position.y - deltaY
			});
			
			dragStart = { x: event.clientX, y: event.clientY };
		}
	}
	
	function handleMouseUp() {
		isDragging = false;
	}
	
	function handleWheel(event) {
		event.preventDefault();
		const zoomDelta = event.deltaY > 0 ? -0.1 : 0.1;
		grid.setZoom(grid.zoom + zoomDelta);
	}
</script>

<svelte:window
	onmousemove={handleMouseMove}
	onmouseup={handleMouseUp}
/>

<div
	bind:this={gridContainer}
	class="bento-grid"
	onmousedown={handleMouseDown}
	onwheel={handleWheel}
	role="application"
	aria-label="Interactive bento grid"
	style="transform: translate({-grid.position.x}px, {-grid.position.y}px) scale({grid.zoom})"
>
	{#each innerCards as card (card.id)}
		<InnerCard {card} />
	{/each}
</div>

<style>
	.bento-grid {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		cursor: grab;
		user-select: none;
		will-change: transform;
	}
	
	.bento-grid:active {
		cursor: grabbing;
	}
</style>