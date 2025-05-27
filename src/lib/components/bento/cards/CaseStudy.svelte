<script lang="ts">
let { card, study } = $props();
</script>

<div class="case-study">
  <h2>{study?.title ?? 'Case Study'}</h2>
  <div class="desc">{study?.description ?? ''}</div>
  <a class="view-project" href={study?.slug ? `/case/${study.slug}` : '#'}>View Project</a>
</div>

<style>
.case-study {
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.case-study h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #3b82f6;
  margin: 0;
}
.desc {
  font-size: 0.97rem;
  color: #374151;
}
.view-project {
  margin-top: auto;
  color: #2563eb;
  text-decoration: underline;
  font-size: 0.93rem;
}
</style>
