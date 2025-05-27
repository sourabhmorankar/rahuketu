<script lang="ts">
let { card } = $props();
let name = $state('');
let email = $state('');
let message = $state('');
function submit() {
  name = '';
  email = '';
  message = '';
}
</script>

<div class="contact-rahul">
  <h2>Contact Rahul</h2>
  <form onsubmit={e => { e.preventDefault(); submit(); }}>
    <input class="input" type="text" placeholder="Name" bind:value={name} required />
    <input class="input" type="email" placeholder="Email" bind:value={email} required />
    <textarea class="input" placeholder="Message" bind:value={message} required></textarea>
    <button class="submit-btn" type="submit">Send</button>
  </form>
</div>

<style>
.contact-rahul {
  height: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
}
.contact-rahul h2 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
.input {
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  font-size: 0.97rem;
}
.submit-btn {
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 0;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.submit-btn:hover {
  background: #2563eb;
}
</style>
