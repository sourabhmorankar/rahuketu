<script>
	let { card } = $props();
	
	const rahulData = {
		name: "Rahul Nangare",
		title: "Sr Cloud Network & Automation Engineer",
		company: "Nice CXone",
		location: "Pune, India",
		bio: "10+ years in network engineering with expertise in cloud platforms, automation, and network protocols.",
		email: "rahulnangare93@gmail.com",
		phone: "+91 7588378020"
	};
</script>

<div class="bio-card">
	<div class="avatar-section">
		<div class="avatar">
			<img src="/avatar-placeholder.svg" alt="{rahulData.name}" />
		</div>
	</div>
	
	<div class="info-section">
		<h2>{rahulData.name}</h2>
		<h3>{rahulData.title}</h3>
		<p class="company">{rahulData.company} • {rahulData.location}</p>
		<p class="bio">{rahulData.bio}</p>
		
		<div class="contact">
			<a href="mailto:{rahulData.email}" class="contact-link">
				📧 Email
			</a>
		</div>
	</div>
</div>

<style>
	.bio-card {
		height: 100%;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	
	.avatar-section {
		display: flex;
		justify-content: center;
	}
	
	.avatar {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		overflow: hidden;
		border: 3px solid #e5e7eb;
	}
	
	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.info-section h2 {
		margin: 0;
		font-size: 1.25rem;
		font-weight: 700;
		color: #111827;
		text-align: center;
	}
	
	.info-section h3 {
		margin: 4px 0;
		font-size: 0.875rem;
		font-weight: 600;
		color: #3b82f6;
		text-align: center;
	}
	
	.company {
		margin: 8px 0;
		font-size: 0.75rem;
		color: #6b7280;
		text-align: center;
	}
	
	.bio {
		margin: 12px 0;
		font-size: 0.75rem;
		line-height: 1.4;
		color: #374151;
		text-align: center;
	}
	
	.contact {
		display: flex;
		justify-content: center;
		margin-top: auto;
	}
	
	.contact-link {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 6px 12px;
		background: #f3f4f6;
		border-radius: 6px;
		text-decoration: none;
		font-size: 0.75rem;
		color: #374151;
		transition: background 0.2s ease;
	}
	
	.contact-link:hover {
		background: #e5e7eb;
	}
</style>