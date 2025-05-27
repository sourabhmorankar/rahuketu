<script lang="ts">
	import { mockData } from '$lib/data/mockData.ts';
	const skills = Object.values(mockData.skills);
</script>

<div class="skill-tree">
	<h3>Technical Skills</h3>
	<div class="skills-grid">
		{#each skills as skill}
			<div class="skill-item">
				<div class="skill-info">
					<span class="skill-name">{skill.name}</span>
					<span class="skill-level">{skill.level}%</span>
				</div>
				<div class="skill-bar">
					<div class="skill-progress" style="width: {skill.level}%"></div>
				</div>
				<span class="skill-category">{skill.category}</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.skill-tree {
		height: 100%;
		padding: 20px;
		background: #f8fafc;
		border-radius: 16px;
		border: 2px solid #e2e8f0;
	}
	
	h3 {
		margin: 0 0 16px 0;
		color: #1e293b;
		font-size: 1.25rem;
		font-weight: 600;
	}
	
	.skills-grid {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	
	.skill-item {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	
	.skill-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.skill-name {
		font-weight: 500;
		color: #334155;
		font-size: 0.9rem;
	}
	
	.skill-level {
		font-size: 0.8rem;
		color: #64748b;
		font-weight: 600;
	}
	
	.skill-bar {
		height: 6px;
		background: #e2e8f0;
		border-radius: 3px;
		overflow: hidden;
	}
	
	.skill-progress {
		height: 100%;
		background: linear-gradient(90deg, #3b82f6, #1d4ed8);
		border-radius: 3px;
		transition: width 0.3s ease;
	}
	
	.skill-category {
		font-size: 0.75rem;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
</style>