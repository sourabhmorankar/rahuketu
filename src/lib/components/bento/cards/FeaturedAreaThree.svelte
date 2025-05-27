<script lang="ts">
let { card } = $props();
</script>

<div class="featured-area area-three">
  <h2>Featured Area Three</h2>
  <div class="featured-content">Tertiary showcase content goes here.</div>
</div>

<style>
.featured-area {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
}
.featured-area h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.featured-content {
  font-size: 1rem;
  color: #374151;
  text-align: center;
}
</style>
