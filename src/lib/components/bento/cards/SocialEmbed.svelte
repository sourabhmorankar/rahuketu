<script lang="ts">
let { card, embed } = $props();
</script>

<div class="social-embed">
  <h2>Social Feed</h2>
  <div class="embed-content">{embed?.content ?? 'Embedded social content.'}</div>
</div>

<style>
.social-embed {
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.social-embed h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #3b82f6;
  margin: 0;
}
.embed-content {
  font-size: 0.97rem;
  color: #374151;
}
</style>
