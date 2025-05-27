<script>
	import BentoGrid from '$lib/components/bento/BentoGrid.svelte';
	import ActionIcons from '$lib/components/navigation/ActionIcons.svelte';
	import MiniMap from '$lib/components/navigation/MiniMap.svelte';
</script>

<svelte:head>
	<title>Rahuketu - Rahul Nangare's Digital Space</title>
	<meta name="description" content="Interactive portfolio and blog of Rahul Nangare, Sr Cloud Network & Automation Engineer" />
</svelte:head>

<div class="app-container">
	<BentoGrid />
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
