<script lang="ts">
let { card, testimonial } = $props();
</script>

<div class="client-testimonial">
  <h2>Testimonial</h2>
  <blockquote class="testimonial">{testimonial?.quote ?? 'Great work and communication.'}</blockquote>
  <div class="author">- {testimonial?.author ?? 'Client'}</div>
</div>

<style>
.client-testimonial {
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.client-testimonial h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #3b82f6;
  margin: 0;
}
.testimonial {
  font-size: 0.97rem;
  color: #374151;
  margin: 0;
}
.author {
  font-size: 0.93rem;
  color: #2563eb;
  text-align: right;
}
</style>
