<script lang="ts">
let { card } = $props();
function download() {
  window.open('/RahulNangare-Resume.pdf', '_blank');
}
</script>

<div class="resume-download">
  <h2>Resume</h2>
  <button class="download-btn" onclick={download}>Download PDF</button>
</div>

<style>
.resume-download {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  justify-content: center;
}
.resume-download h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
.download-btn {
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 28px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.download-btn:hover {
  background: #2563eb;
}
</style>
