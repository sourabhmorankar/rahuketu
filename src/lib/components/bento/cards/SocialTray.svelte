<script lang="ts">
	const socialLinks = [
		{ platform: "LinkedIn", icon: "💼", url: "https://in.linkedin.com/in/rahul-nangare" },
		{ platform: "GitHub", icon: "🐙", url: "#" },
		{ platform: "Twitter", icon: "🐦", url: "#" }
	];
</script>

<div class="social-tray">
	<h3>🌐 Connect</h3>
	<div class="social-links">
		{#each socialLinks as link}
			<a href={link.url} class="social-link" target="_blank" rel="noopener">
				<span class="icon">{link.icon}</span>
				<span class="platform">{link.platform}</span>
			</a>
		{/each}
	</div>
	<div class="status">
		<span class="status-dot"></span>
		<span>Open to networking</span>
	</div>
</div>

<style>
	.social-tray {
		height: 100%;
		padding: 20px;
		background: #06b6d4;
		color: white;
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	
	h3 {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
	}
	
	.social-links {
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex: 1;
	}
	
	.social-link {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 12px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		text-decoration: none;
		color: white;
		transition: background 0.2s ease;
		font-size: 0.85rem;
	}
	
	.social-link:hover {
		background: rgba(255, 255, 255, 0.3);
	}
	
	.icon {
		font-size: 1rem;
	}
	
	.status {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 0.8rem;
		opacity: 0.9;
		margin-top: auto;
	}
	
	.status-dot {
		width: 8px;
		height: 8px;
		background: #4ade80;
		border-radius: 50%;
	}
</style>