<script lang="ts">
let { card, article } = $props();
</script>

<div class="blog-article">
  <h2>{article?.title ?? 'Blog Article'}</h2>
  <div class="excerpt">{article?.excerpt ?? ''}</div>
  <a class="read-more" href={article?.slug ? `/blog/${article.slug}` : '#'}>Read More</a>
</div>

<style>
.blog-article {
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.blog-article h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #3b82f6;
  margin: 0;
}
.excerpt {
  font-size: 0.97rem;
  color: #374151;
}
.read-more {
  margin-top: auto;
  color: #2563eb;
  text-decoration: underline;
  font-size: 0.93rem;
}
</style>
