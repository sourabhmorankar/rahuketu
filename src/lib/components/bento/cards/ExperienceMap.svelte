<script lang="ts">
let { card } = $props();
const experiences = [
  { role: 'Sr Cloud Network Engineer', company: 'Nice CXone', years: '2021–Present', desc: 'Leading cloud automation and network solutions.' },
  { role: 'Network Engineer', company: 'XYZ Corp', years: '2017–2021', desc: 'Managed network infrastructure and automation.' },
  { role: 'Support Engineer', company: 'ABC Tech', years: '2014–2017', desc: 'Provided L2/L3 support for enterprise clients.' }
];
</script>

<div class="experience-map">
  <h2>Experience Map</h2>
  <ul>
    {#each experiences as exp}
      <li>
        <div class="exp-header">
          <span class="exp-role">{exp.role}</span>
          <span class="exp-years">{exp.years}</span>
        </div>
        <span class="exp-company">{exp.company}</span>
        <div class="exp-desc">{exp.desc}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
.experience-map {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.experience-map h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.experience-map ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.experience-map li {
  background: #f3f4f6;
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.exp-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #374151;
}
.exp-role {
  font-size: 0.97rem;
}
.exp-years {
  font-size: 0.85rem;
  color: #6b7280;
}
.exp-company {
  font-size: 0.87rem;
  color: #3b82f6;
}
.exp-desc {
  font-size: 0.82rem;
  color: #374151;
  margin-top: 2px;
}
</style>
