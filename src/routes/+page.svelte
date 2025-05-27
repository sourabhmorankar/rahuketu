<script lang="ts">
	import BioCard from '$lib/components/bento/cards/BioCard.svelte';
	import type { Card } from '$lib/types/card';
	
	const bioCardData: Card = { id: 'bio', type: 'bioCard', position: { x: 0, y: 0 }, size: '1x2' };
</script>

<svelte:head>
	<title>Rahuketu - Rahul Nangare's Digital Space</title>
	<meta name="description" content="Interactive portfolio and blog of Rahul Nangare, Sr Cloud Network & Automation Engineer" />
</svelte:head>

<div class="app-container">
	
	<h1>Welcome to Rahuketu</h1>
	<p>Rahul Nangare's Digital Portfolio</p>
	
	<div class="bio-card-container">
		<BioCard card={bioCardData} />
	</div>
</div>

<style>
	.app-container {
		width: 100vw;
		height: 100vh;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, var(--primary-gradient-start, #667eea) 0%, var(--primary-gradient-end, #764ba2) 100%);
		color: var(--text-color-light, white);
		gap: var(--spacing-medium, 2rem);
	}
	
	h1 {
		font-size: 3rem;
		margin: 0;
		text-align: center;
	}
	
	p {
		font-size: 1.2rem;
		opacity: 0.9;
		text-align: center;
		margin: 0;
	}
	
	.bio-card-container {
		/* Responsive card dimensions */
		width: clamp(280px, 85vw, 380px); /* Min width, preferred viewport-based width, max width */
		/* Let content determine height, but set a minimum if desired */
		min-height: 350px; 
		/* Consider aspect-ratio if the BioCard has media that needs it: */
		/* aspect-ratio: 3 / 4; */

		background: var(--card-background, white);
		border-radius: var(--card-border-radius, 12px);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		/* Note: If BioCard.svelte is responsible for its own card appearance (background, shadow, border-radius), */
		/* then these three styling properties (background, border-radius, box-shadow) could be moved into BioCard.svelte. */
	}
</style>
