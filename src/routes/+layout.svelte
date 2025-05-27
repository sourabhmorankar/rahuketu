<script>
	import '../app.css';
	
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow: hidden;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
	
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}
	
	main {
		width: 100vw;
		height: 100vh;
		position: relative;
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	}
</style>