<script lang="ts">
let { card } = $props();
const skills = [
  { name: 'Svelte', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Firebase', level: 80 },
  { name: 'Networking', level: 95 },
  { name: 'Automation', level: 88 }
];
</script>

<div class="skill-tree">
  <h2>Skill Tree</h2>
  <ul>
    {#each skills as skill}
      <li>
        <span class="skill-name">{skill.name}</span>
        <div class="skill-bar-bg">
          <div class="skill-bar" style="width: {skill.level}%"></div>
        </div>
        <span class="skill-level">{skill.level}%</span>
      </li>
    {/each}
  </ul>
</div>

<style>
.skill-tree {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.skill-tree h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.skill-tree ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.skill-tree li {
  display: flex;
  align-items: center;
  gap: 8px;
}
.skill-name {
  flex: 1 0 80px;
  font-size: 0.95rem;
  color: #374151;
}
.skill-bar-bg {
  flex: 3 1 120px;
  background: #e5e7eb;
  border-radius: 6px;
  height: 10px;
  overflow: hidden;
}
.skill-bar {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 6px;
  transition: width 0.4s;
}
.skill-level {
  width: 36px;
  text-align: right;
  font-size: 0.85rem;
  color: #6b7280;
}
</style>
