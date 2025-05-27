<script lang="ts">
	interface Card {
		id: string;
		type: string;
		position: { x: number; y: number };
		size: string;
	}
	
	let { cards = [] }: { cards: Card[] } = $props();
</script>

<div class="bento-grid">
	<div class="grid-container">
		{#each cards as card (card.id)}
			<div 
				class="grid-card size-{card.size}" 
				style="grid-column: {card.position.x + 1}; grid-row: {card.position.y + 1};"
			>
				<div class="card-content">
					<h3>{card.type}</h3>
					<p>Card ID: {card.id}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.bento-grid {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, 200px);
		grid-template-rows: repeat(auto-fit, 200px);
		gap: 16px;
		padding: 24px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.grid-card {
		border-radius: 16px;
		background: #f5f5f5;
		border: 2px solid #e0e0e0;
		overflow: hidden;
		transition: transform 0.2s ease;
	}
	
	.grid-card:hover {
		transform: scale(1.02);
	}	
	.grid-card.size-1x1 {
		grid-column: span 1;
		grid-row: span 1;
	}
	
	.grid-card.size-1x2 {
		grid-column: span 1;
		grid-row: span 2;
	}
	
	.grid-card.size-2x1 {
		grid-column: span 2;
		grid-row: span 1;
	}
	
	.grid-card.size-2x2 {
		grid-column: span 2;
		grid-row: span 2;
	}
	
	.grid-card.size-3x1 {
		grid-column: span 3;
		grid-row: span 1;
	}
	
	.card-content {
		padding: 16px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	h3 {
		margin: 0 0 8px 0;
		font-size: 1.2rem;
		font-weight: 600;
		color: #333;
	}
	
	p {
		margin: 0;
		font-size: 0.9rem;
		color: #666;
	}
</style>