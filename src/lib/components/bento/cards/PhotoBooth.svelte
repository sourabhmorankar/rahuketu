<script lang="ts">
let { card } = $props();
const images = [
  '/photos/photo1.jpg',
  '/photos/photo2.jpg',
  '/photos/photo3.jpg'
];
let current = $state(0);
function next() { current = (current + 1) % images.length; }
function prev() { current = (current - 1 + images.length) % images.length; }
</script>

<div class="photo-booth">
  <h2>Photo Booth</h2>
  <div class="photo-viewer">
    <button class="nav-btn" onclick={prev} aria-label="Prev">&#8592;</button>
    <img src={images[current]} alt="Photo {current + 1}" class="photo-img" />
    <button class="nav-btn" onclick={next} aria-label="Next">&#8594;</button>
  </div>
</div>

<style>
.photo-booth {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.photo-booth h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.photo-viewer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.photo-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  background: #e5e7eb;
}
.nav-btn {
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.2s;
}
.nav-btn:hover {
  background: #2563eb;
}
</style>
