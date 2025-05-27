<script lang="ts">
let { card, photo } = $props();
</script>

<div class="photo-update">
  <h2>Photo Update</h2>
  <img class="update-img" src={photo?.src ?? '/photos/photo-update.jpg'} alt={photo?.alt ?? 'Photo update'} />
</div>

<style>
.photo-update {
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.photo-update h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #3b82f6;
  margin: 0;
}
.update-img {
  width: 100%;
  max-width: 180px;
  border-radius: 8px;
  background: #e5e7eb;
}
</style>
