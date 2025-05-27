<script lang="ts">
	import { mockData } from '$lib/data/mockData.ts';
	const profile = mockData.profile;
</script>

<div class="bio-card">
	<div class="header">
		<div class="avatar">RN</div>
		<div class="status">
			<span class="status-dot"></span>
			<span>Available</span>
		</div>
	</div>
	
	<div class="content">
		<h1>{profile.name}</h1>
		<h2>{profile.title}</h2>
		<p class="company">{profile.company}</p>
		<p class="location">📍 {profile.location}</p>
	</div>
	
	<div class="quick-contact">
		<button class="contact-btn">📧 Email</button>
		<button class="contact-btn">📱 Call</button>
	</div>
</div>

<style>
	.bio-card {
		height: 100%;
		padding: 20px;
		background: #6366f1;
		color: white;
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		font-weight: bold;
		border: 2px solid rgba(255, 255, 255, 0.3);
	}
	
	.status {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 0.8rem;
		background: rgba(255, 255, 255, 0.15);
		padding: 6px 10px;
		border-radius: 20px;
	}
	
	.status-dot {
		width: 6px;
		height: 6px;
		background: #4ade80;
		border-radius: 50%;
	}
	
	.content {
		text-align: center;
		flex: 1;
	}
	
	h1 {
		font-size: 1.4rem;
		margin: 0 0 4px 0;
		font-weight: bold;
	}
	
	h2 {
		font-size: 0.9rem;
		margin: 0 0 8px 0;
		opacity: 0.9;
		font-weight: 500;
	}
	
	.company, .location {
		font-size: 0.8rem;
		margin: 4px 0;
		opacity: 0.8;
	}
	
	.quick-contact {
		display: flex;
		gap: 8px;
	}
	
	.contact-btn {
		flex: 1;
		background: rgba(255, 255, 255, 0.2);
		border: none;
		color: white;
		padding: 8px;
		border-radius: 8px;
		font-size: 0.8rem;
		cursor: pointer;
		transition: background 0.2s;
	}
	
	.contact-btn:hover {
		background: rgba(255, 255, 255, 0.3);
	}
</style>