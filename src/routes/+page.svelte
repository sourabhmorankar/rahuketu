<script lang="ts">
	import BentoGrid from '$lib/components/bento/BentoGrid.svelte';
	import ActionIcons from '$lib/components/navigation/ActionIcons.svelte';
	import MiniMap from '$lib/components/navigation/MiniMap.svelte';

	const placeholderCards = [
		{ id: 'bio', type: 'bioCard', position: { x: 0, y: 0 }, size: '1x2' },
		{ id: 'skills', type: 'skillTree', position: { x: 1, y: 0 }, size: '2x2' },
		{ id: 'experience', type: 'experienceMap', position: { x: 3, y: 0 }, size: '3x1' },
		{ id: 'highlights', type: 'highlights', position: { x: -1, y: 0 }, size: '2x1' }
	];
</script>

<svelte:head>
	<title>Rahuketu - Rahul Nangare's Digital Space</title>
	<meta name="description" content="Interactive portfolio and blog of Rahul Nangare, Sr Cloud Network & Automation Engineer" />
</svelte:head>

<div class="app-container">
	<BentoGrid cards={placeholderCards} />
	<ActionIcons />
	<MiniMap />
</div>

<style>
	.app-container {
		width: 100vw;
		height: 100vh;
		position: relative;
		overflow: hidden;
	}
</style>
