<script>
	import { useUI } from '../../state/ui.svelte.js';
	import { useAuth } from '../../state/auth.svelte.js';
	
	const ui = useUI();
	const auth = useAuth();
	
	const icons = $derived(() => [
		{
			id: 'search',
			icon: '🔍',
			label: 'Search',
			action: () => ui.toggleSearchDrawer(),
			visible: true
		},
		{
			id: 'auth',
			icon: auth.isAuthenticated ? '👤' : '🔑',
			label: auth.isAuthenticated ? 'Profile' : 'Login',
			action: () => ui.toggleAuthDrawer(),
			visible: true
		},
		{
			id: 'dashboard',
			icon: '⚡',
			label: 'Dashboard',
			action: () => ui.toggleDashboard(),
			visible: auth.isAuthenticated
		},
		{
			id: 'legal',
			icon: '📋',
			label: 'Legal',
			action: () => ui.toggleLegalDrawer(),
			visible: true
		}
	].filter(icon => icon.visible));
</script>

<nav class="action-icons" aria-label="Main navigation">
	{#each icons as icon (icon.id)}
		<button
			class="action-icon"
			onclick={icon.action}
			aria-label={icon.label}
			title={icon.label}
		>
			<span class="icon">{icon.icon}</span>
		</button>
	{/each}
</nav>

<style>
	.action-icons {
		position: fixed;
		top: 20px;
		right: 20px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		z-index: 100;
	}
	
	.action-icon {
		width: 48px;
		height: 48px;
		background: white;
		border: none;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.action-icon:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
	}
	
	.action-icon:active {
		transform: translateY(0);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}
	
	.icon {
		font-size: 20px;
		user-select: none;
	}
</style>