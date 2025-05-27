<script lang="ts">
let { card } = $props();
let news = [
  'Rahuketu v1.0 released!',
  'Presented at Svelte Summit 2024.',
  'Patent granted for Cloud Automation.'
];
let current = $state(0);
function next() { current = (current + 1) % news.length; }
</script>

<div class="news-marquee">
  <h2>News</h2>
  <div class="marquee">{news[current]}</div>
  <button class="next-btn" onclick={next} aria-label="Next">Next</button>
</div>

<style>
.news-marquee {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
}
.news-marquee h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.marquee {
  font-size: 1rem;
  color: #374151;
  margin-bottom: 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.next-btn {
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 18px;
  font-size: 0.93rem;
  cursor: pointer;
  transition: background 0.2s;
}
.next-btn:hover {
  background: #2563eb;
}
</style>
