<div class="photo-card">
	<div class="photo-grid">
		<div class="photo">📸</div>
		<div class="photo">🏢</div>
		<div class="photo">👨‍💻</div>
		<div class="photo">🎯</div>
	</div>
	<div class="label">Gallery</div>
</div>

<style>
	.photo-card {
		height: 100%;
		background: #7c3aed;
		color: white;
		border-radius: 16px;
		padding: 16px;
		display: flex;
		flex-direction: column;
	}
	
	.photo-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px;
		flex: 1;
		margin-bottom: 12px;
	}
	
	.photo {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
	}
	
	.label {
		text-align: center;
		font-size: 0.8rem;
		font-weight: 600;
	}
</style>