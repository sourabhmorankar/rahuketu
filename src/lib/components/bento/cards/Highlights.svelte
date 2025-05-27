<script lang="ts">
	import { mockData } from '$lib/data/mockData.ts';
	const achievements = mockData.achievements.slice(0, 3);
</script>

<div class="highlights">
	<h3>🏆 Key Achievements</h3>
	<div class="achievements">
		{#each achievements as achievement}
			<div class="achievement">
				<div class="year">{achievement.year}</div>
				<div class="title">{achievement.title}</div>
				{#if achievement.org}
					<div class="org">{achievement.org}</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.highlights {
		height: 100%;
		padding: 20px;
		background: #f59e0b;
		color: white;
		border-radius: 16px;
	}
	
	h3 {
		margin: 0 0 16px 0;
		font-size: 1.1rem;
		font-weight: 600;
	}
	
	.achievements {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	
	.achievement {
		background: rgba(255, 255, 255, 0.2);
		padding: 12px;
		border-radius: 8px;
	}
	
	.year {
		font-size: 0.75rem;
		opacity: 0.8;
		font-weight: 600;
	}
	
	.title {
		font-size: 0.85rem;
		font-weight: 500;
		margin: 4px 0;
	}
	
	.org {
		font-size: 0.75rem;
		opacity: 0.9;
	}
</style>