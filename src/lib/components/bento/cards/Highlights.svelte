<script lang="ts">
let { card } = $props();
const highlights = [
  { title: 'Patent Granted', desc: 'Cloud automation patent awarded in 2023.' },
  { title: 'Speaker', desc: 'Presented at CloudConf 2022.' },
  { title: 'Open Source', desc: 'Maintainer of NetAutoJS.' }
];
</script>

<div class="highlights">
  <h2>Highlights</h2>
  <ul>
    {#each highlights as h}
      <li>
        <span class="highlight-title">{h.title}</span>
        <span class="highlight-desc">{h.desc}</span>
      </li>
    {/each}
  </ul>
</div>

<style>
.highlights {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.highlights h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.highlights ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.highlights li {
  background: #f3f4f6;
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.highlight-title {
  font-size: 0.97rem;
  font-weight: 600;
  color: #374151;
}
.highlight-desc {
  font-size: 0.85rem;
  color: #6b7280;
}
</style>
