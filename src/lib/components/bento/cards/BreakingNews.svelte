<script lang="ts">
let { card, news } = $props();
</script>

<div class="breaking-news">
  <h2>Breaking News</h2>
  <div class="news-content">{news?.headline ?? 'Latest headline here.'}</div>
</div>

<style>
.breaking-news {
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.breaking-news h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #3b82f6;
  margin: 0;
}
.news-content {
  font-size: 0.97rem;
  color: #374151;
}
</style>
