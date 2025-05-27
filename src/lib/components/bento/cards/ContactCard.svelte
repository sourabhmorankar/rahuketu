<div class="contact-card">
	<h3>💬 Get in Touch</h3>
	<form class="contact-form">
		<input placeholder="Your email" type="email" />
		<textarea placeholder="Your message"></textarea>
		<button type="submit">Send Message</button>
	</form>
	<div class="contact-info">
		<div>📧 rahulnangare93@gmail.com</div>
		<div>📱 +91 7588378020</div>
	</div>
</div>

<style>
	.contact-card {
		height: 100%;
		padding: 20px;
		background: #f0fdf4;
		border: 2px solid #bbf7d0;
		border-radius: 16px;
	}
	
	h3 {
		margin: 0 0 12px 0;
		color: #166534;
		font-size: 1rem;
	}
	
	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 12px;
	}
	
	input, textarea {
		padding: 8px;
		border: 1px solid #d1d5db;
		border-radius: 6px;
		font-size: 0.8rem;
	}
	
	textarea {
		height: 60px;
		resize: none;
	}
	
	button {
		background: #16a34a;
		color: white;
		border: none;
		padding: 8px;
		border-radius: 6px;
		cursor: pointer;
		font-size: 0.8rem;
	}
	
	.contact-info {
		display: flex;
		flex-direction: column;
		gap: 4px;
		font-size: 0.75rem;
		color: #166534;
	}
</style>