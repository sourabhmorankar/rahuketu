<script lang="ts">
let { card } = $props();
let moods = ['😊 Happy', '💡 Inspired', '🤔 Thinking', '🚀 Productive'];
let current = $state(0);
function next() { current = (current + 1) % moods.length; }
</script>

<div class="mood-indicator">
  <h2>Mood</h2>
  <div class="mood">{moods[current]}</div>
  <button class="next-btn" onclick={next} aria-label="Next">Next</button>
</div>

<style>
.mood-indicator {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
}
.mood-indicator h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.mood {
  font-size: 1.2rem;
  color: #374151;
  margin-bottom: 10px;
  text-align: center;
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
