<script lang="ts">
	import { mockData } from '$lib/data/mockData.ts';
	const experience = mockData.experience;
</script>

<div class="experience-map">
	<h3>Professional Journey</h3>
	<div class="timeline">
		{#each experience as exp, i}
			<div class="timeline-item">
				<div class="timeline-dot"></div>
				<div class="exp-content">
					<h4>{exp.title}</h4>
					<p class="company">{exp.company} • {exp.period}</p>
					<ul class="highlights">
						{#each exp.highlights.slice(0, 2) as highlight}
							<li>{highlight}</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.experience-map {
		height: 100%;
		padding: 20px;
		background: #fefefe;
		border-radius: 16px;
		border: 2px solid #e5e7eb;
	}
	
	h3 {
		margin: 0 0 20px 0;
		color: #111827;
		font-size: 1.1rem;
		font-weight: 600;
	}
	
	.timeline {
		display: flex;
		flex-direction: column;
		gap: 20px;
		position: relative;
	}
	
	.timeline-item {
		display: flex;
		gap: 12px;
		align-items: flex-start;
	}
	
	.timeline-dot {
		width: 12px;
		height: 12px;
		background: #3b82f6;
		border-radius: 50%;
		margin-top: 4px;
		flex-shrink: 0;
	}
	
	.exp-content h4 {
		margin: 0 0 4px 0;
		font-size: 0.9rem;
		font-weight: 600;
		color: #1f2937;
	}
	
	.company {
		margin: 0 0 8px 0;
		font-size: 0.8rem;
		color: #6b7280;
	}
	
	.highlights {
		margin: 0;
		padding-left: 16px;
		font-size: 0.75rem;
		color: #4b5563;
	}
	
	.highlights li {
		margin-bottom: 4px;
	}
</style>