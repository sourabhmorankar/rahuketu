<script lang="ts">
	let gridPosition = $state({ x: 0, y: 0 });
	let viewportPosition = $state({ x: 0, y: 0 });
</script>

<div class="mini-map">
	<div class="map-container">
		<div class="grid-overview">
			<div class="grid-cells">
				{#each Array(9) as _, i}
					{#each Array(9) as _, j}
						<div 
							class="grid-cell"
							class:has-content={Math.random() > 0.6}
						></div>
					{/each}
				{/each}
			</div>
			<div 
				class="viewport-indicator"
				style="transform: translate({viewportPosition.x}px, {viewportPosition.y}px)"
			></div>
		</div>
		<div class="map-label">Grid Map</div>
	</div>
</div>
<style>
	.mini-map {
		position: fixed;
		bottom: 24px;
		left: 24px;
		z-index: 1000;
	}
	
	.map-container {
		background: #ffffff;
		border: 2px solid #e0e0e0;
		border-radius: 12px;
		padding: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}
	
	.grid-overview {
		width: 120px;
		height: 120px;
		position: relative;
		margin-bottom: 8px;
	}
	
	.grid-cells {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		grid-template-rows: repeat(9, 1fr);
		gap: 1px;
		width: 100%;
		height: 100%;
	}
	
	.grid-cell {
		background: #f5f5f5;
		border-radius: 2px;
	}
	
	.grid-cell.has-content {
		background: #333;
	}
	
	.viewport-indicator {
		position: absolute;
		top: 40px;
		left: 40px;
		width: 40px;
		height: 40px;
		border: 2px solid #ff6b35;
		border-radius: 4px;
		background: rgba(255, 107, 53, 0.2);
	}
	
	.map-label {
		text-align: center;
		font-size: 0.75rem;
		color: #666;
		font-weight: 500;
	}
</style>