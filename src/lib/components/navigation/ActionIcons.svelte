<script lang="ts">
	let isAuthenticated = $state(false);
</script>

<div class="action-icons">
	<button class="icon-button" title="Search">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
			<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
		</svg>
	</button>
	
	<button class="icon-button" title={isAuthenticated ? 'Logout' : 'Login'}>
		<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
			<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
		</svg>
	</button>
	
	{#if isAuthenticated}
		<button class="icon-button" title="Dashboard">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
				<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
			</svg>
		</button>
	{/if}
	
	<button class="icon-button" title="Legal">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
			<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
		</svg>
	</button>
</div>
<style>
	.action-icons {
		position: fixed;
		top: 24px;
		right: 24px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		z-index: 1000;
	}
	
	.icon-button {
		width: 48px;
		height: 48px;
		background: #ffffff;
		border: 2px solid #e0e0e0;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}
	
	.icon-button:hover {
		background: #f5f5f5;
		transform: scale(1.05);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}
	
	.icon-button svg {
		color: #333;
	}
</style>