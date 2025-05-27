<script lang="ts">
	import { mockData } from '$lib/data/mockData.ts';
	const project = mockData.projects[0];
</script>

<div class="project-showcase">
	<h3>🚀 Featured Project</h3>
	<div class="project">
		<h4>{project.title}</h4>
		<p>{project.description}</p>
		<div class="tech-stack">
			{#each project.tech as tech}
				<span class="tech-tag">{tech}</span>
			{/each}
		</div>
		<div class="status">Status: {project.status}</div>
	</div>
</div>

<style>
	.project-showcase {
		height: 100%;
		padding: 20px;
		background: #8b5cf6;
		color: white;
		border-radius: 16px;
	}
	
	h3 {
		margin: 0 0 16px 0;
		font-size: 1rem;
	}
	
	h4 {
		margin: 0 0 8px 0;
		font-size: 0.9rem;
		font-weight: 600;
	}
	
	p {
		font-size: 0.8rem;
		margin: 0 0 12px 0;
		opacity: 0.9;
		line-height: 1.4;
	}
	
	.tech-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-bottom: 12px;
	}
	
	.tech-tag {
		background: rgba(255, 255, 255, 0.2);
		padding: 4px 8px;
		border-radius: 4px;
		font-size: 0.7rem;
	}
	
	.status {
		font-size: 0.75rem;
		opacity: 0.8;
		background: rgba(255, 255, 255, 0.1);
		padding: 6px 10px;
		border-radius: 6px;
		display: inline-block;
	}
</style>