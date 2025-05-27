<script lang="ts">
	export let post: any;
</script>

<div class="blog-card" on:click={() => console.log('Opening:', post.title)}>
	<div class="blog-image">
		<div class="placeholder-image">{post.category}</div>
	</div>
	<div class="blog-content">
		<div class="category">{post.category}</div>
		<h4>{post.title}</h4>
		<p>{post.excerpt}</p>
		<div class="meta">
			<span>{post.readTime}</span>
			<span>{new Date(post.date).toLocaleDateString()}</span>
		</div>
	</div>
</div>

<style>
	.blog-card {
		height: 100%;
		background: white;
		border-radius: 12px;
		border: 2px solid #f3f4f6;
		overflow: hidden;
		cursor: pointer;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}
	
	.blog-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
	}
	
	.blog-image {
		height: 40%;
		background: linear-gradient(45deg, #e0e7ff, #c7d2fe);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.placeholder-image {
		font-size: 0.8rem;
		font-weight: 600;
		color: #4f46e5;
		background: rgba(255, 255, 255, 0.8);
		padding: 6px 12px;
		border-radius: 6px;
	}
	
	.blog-content {
		padding: 16px;
		height: 60%;
		display: flex;
		flex-direction: column;
	}
	
	.category {
		font-size: 0.7rem;
		color: #6366f1;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 6px;
	}
	
	h4 {
		font-size: 0.85rem;
		font-weight: 600;
		margin: 0 0 8px 0;
		color: #1f2937;
		line-height: 1.3;
	}
	
	p {
		font-size: 0.75rem;
		color: #6b7280;
		margin: 0 0 auto 0;
		line-height: 1.4;
	}
	
	.meta {
		display: flex;
		justify-content: space-between;
		font-size: 0.7rem;
		color: #9ca3af;
		margin-top: 12px;
		padding-top: 12px;
		border-top: 1px solid #f3f4f6;
	}
</style>