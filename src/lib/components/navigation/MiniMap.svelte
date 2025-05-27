<script>
	import { useGrid } from '../../state/grid.svelte.js';
	
	const grid = useGrid();
	
	const mapScale = 0.1;
	const mapSize = 120;
	
	const viewportIndicator = $derived({
		x: (grid.center.x * mapScale) - (grid.position.x * mapScale),
		y: (grid.center.y * mapScale) - (grid.position.y * mapScale),
		width: (grid.viewport.width * mapScale) / grid.zoom,
		height: (grid.viewport.height * mapScale) / grid.zoom
	});
	
	function handleMapClick(event) {
		const rect = event.currentTarget.getBoundingClientRect();
		const clickX = event.clientX - rect.left;
		const clickY = event.clientY - rect.top;
		
		const targetX = (clickX - mapSize / 2) / mapScale;
		const targetY = (clickY - mapSize / 2) / mapScale;
		
		grid.setPosition({ x: targetX, y: targetY });
	}
</script>

<div class="mini-map" onclick={handleMapClick} onkeydown={(e) => e.key === 'Enter' && handleMapClick(e)} role="button" tabindex="0">
	<div class="map-grid">
		<div class="grid-lines">
			{#each Array(10) as _, i}
				<div class="grid-line-v" style="left: {(i + 1) * 12}px"></div>
				<div class="grid-line-h" style="top: {(i + 1) * 12}px"></div>
			{/each}
		</div>
		
		<div 
			class="viewport-indicator"
			style="
				transform: translate({viewportIndicator.x}px, {viewportIndicator.y}px);
				width: {viewportIndicator.width}px;
				height: {viewportIndicator.height}px;
			"
		></div>
	</div>
	
	<div class="zoom-info">
		{Math.round(grid.zoom * 100)}%
	</div>
</div>

<style>
	.mini-map {
		position: fixed;
		bottom: 20px;
		left: 20px;
		width: 120px;
		height: 120px;
		background: white;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		z-index: 100;
	}
</style>