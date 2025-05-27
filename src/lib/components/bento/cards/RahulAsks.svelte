<script lang="ts">
let { card } = $props();
let questions = [
  'What is your favorite cloud platform?',
  'How do you approach automation?',
  'What inspires you most in tech?'
];
let current = $state(0);
function next() { current = (current + 1) % questions.length; }
</script>

<div class="rahul-asks">
  <h2>Rahul Asks</h2>
  <div class="question">{questions[current]}</div>
  <button class="next-btn" onclick={next} aria-label="Next">Next</button>
</div>

<style>
.rahul-asks {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
}
.rahul-asks h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.question {
  font-size: 1rem;
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
