<script lang="ts">
let { card } = $props();
let faqs = [
  { q: 'How can I contact you?', a: 'Use the Contact card or email rahulnangare93@gmail.com.' },
  { q: 'Do you offer consulting?', a: 'Yes, reach out for availability.' },
  { q: 'What are your main skills?', a: 'Cloud, automation, networking, Svelte.' }
];
let open = $state(-1);
function toggle(idx: number) { open = open === idx ? -1 : idx; }
</script>

<div class="ask-rahul">
  <h2>Ask Rahul</h2>
  <ul>
    {#each faqs as faq, idx}
      <li>
        <button class="faq-q" onclick={() => toggle(idx)} aria-expanded={open === idx}>{faq.q}</button>
        {#if open === idx}
          <div class="faq-a">{faq.a}</div>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
.ask-rahul {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.ask-rahul h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.ask-rahul ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ask-rahul li {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.faq-q {
  background: #f3f4f6;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 0.97rem;
  color: #374151;
  text-align: left;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}
.faq-q[aria-expanded="true"] {
  background: #3b82f6;
  color: white;
}
.faq-a {
  font-size: 0.89rem;
  color: #2563eb;
  background: #e5e7eb;
  border-radius: 6px;
  padding: 6px 12px;
  margin-top: 2px;
}
</style>
