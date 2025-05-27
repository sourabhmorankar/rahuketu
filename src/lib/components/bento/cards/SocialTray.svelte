<script lang="ts">
let { card } = $props();
const socials = [
  { name: 'GitHub', url: 'https://github.com/rahulnangare', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/rahulnangare', icon: '🔗' },
  { name: 'Twitter', url: 'https://twitter.com/rahulnangare', icon: '🐦' }
];
</script>

<div class="social-tray">
  <h2>Social</h2>
  <div class="social-list">
    {#each socials as s}
      <a class="social-link" href={s.url} target="_blank" rel="noopener noreferrer">{s.icon} {s.name}</a>
    {/each}
  </div>
</div>

<style>
.social-tray {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
}
.social-tray h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.social-list {
  display: flex;
  gap: 12px;
}
.social-link {
  background: #f3f4f6;
  border-radius: 6px;
  padding: 8px 14px;
  color: #374151;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.2s;
}
.social-link:hover {
  background: #3b82f6;
  color: white;
}
</style>
