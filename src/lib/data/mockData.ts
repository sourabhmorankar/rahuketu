export const mockData = {
  profile: {
    name: "Rahul Nangare",
    title: "Sr Cloud Network & Automation Engineer",
    company: "Nice CXone",
    location: "Pune, India",
    email: "rahulnangare93@gmail.com",
    phone: "+91 7588378020",
    avatar: "/api/placeholder/150/150",
    bio: "Expert in cloud networking, automation, and infrastructure with 10+ years of enterprise experience. Passionate about Python scripting, network automation, and building resilient cloud architectures.",
    status: "Building amazing network solutions",
    currentFocus: "AI-driven network automation"
  },
  
  skills: {
    cloud: { name: "AWS/Azure", level: 95, category: "Cloud" },
    networking: { name: "BGP/OSPF/MPLS", level: 98, category: "Networking" },
    automation: { name: "Python/Ansible", level: 92, category: "Automation" },
    security: { name: "Firewalls/VPN", level: 88, category: "Security" },
    monitoring: { name: "SolarWinds/LogicMonitor", level: 85, category: "Monitoring" }
  },

  experience: [
    {
      title: "Sr Cloud Network & Automation Engineer",
      company: "Nice CXone",
      period: "Sep 2020 - Present",
      location: "Pune",
      highlights: ["Network automation with Python/Ansible", "AWS/Panorama firewall management", "MVP award for automation (Aug 2023)"]
    },
    {
      title: "L2 Network Operations Engineer", 
      company: "Varian Medical Systems",
      period: "Sep 2019 - Sep 2020",
      location: "Pune",
      highlights: ["Enterprise network management", "Employee of Quarter (Apr 2021)", "Network modernization projects"]
    }
  ],

  achievements: [
    { title: "AWS Certified Advanced Networking–Specialty", year: "2023" },
    { title: "MVP - Network Automation", year: "2023", org: "Nice CXone" },
    { title: "Employee of the Quarter", year: "2021", org: "Varian Medical Systems" },
    { title: "CCNA Certification", year: "2020" },
    { title: "JNCIA-Junos Certification", year: "2022" }
  ],

  blogPosts: [
    {
      id: "1",
      title: "Automating Network Tasks with Python and Ansible",
      excerpt: "How I reduced manual network configurations by 80% using Python scripts and Ansible playbooks",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Automation",
      image: "/api/placeholder/300/200"
    },
    {
      id: "2", 
      title: "AWS VPC Design Best Practices",
      excerpt: "Building scalable and secure VPC architectures for enterprise workloads",
      date: "2024-01-10",
      readTime: "12 min read", 
      category: "Cloud",
      image: "/api/placeholder/300/200"
    }
  ],

  projects: [
    {
      title: "Enterprise Network Automation Suite",
      description: "Python-based automation platform reducing manual tasks by 80%",
      tech: ["Python", "Ansible", "Git", "REST APIs"],
      status: "Production"
    }
  ]
};