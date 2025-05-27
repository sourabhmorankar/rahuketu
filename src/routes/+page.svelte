<script lang="ts">
import BentoGrid from '$lib/components/bento/BentoGrid.svelte';
import type { Card } from '$lib/types/card';

// Inner circle cards (central area)
const innerCards: Card[] = [
  { id: 'bio', type: 'bioCard', position: { x: -1, y: -1 }, size: '1x2' },
  { id: 'skills', type: 'skillTree', position: { x: 0, y: -1 }, size: '1x1' },
  { id: 'exp', type: 'experienceMap', position: { x: 1, y: -1 }, size: '2x1' },
  { id: 'photo', type: 'photoBooth', position: { x: -1, y: 0 }, size: '2x1' },
  { id: 'news', type: 'newsMarquee', position: { x: 1, y: 0 }, size: '1x1' },
  { id: 'social', type: 'socialTray', position: { x: -1, y: 1 }, size: '1x1' },
  { id: 'contact', type: 'contactRahul', position: { x: 0, y: 1 }, size: '1x2' },
  { id: 'resume', type: 'resumeDownload', position: { x: 2, y: 1 }, size: '1x1' },
  { id: 'featured1', type: 'featuredAreaOne', position: { x: 0, y: 0 }, size: '1x1' }
];

// Outer circle cards (surrounding area)
const outerCards: Card[] = [
  // Top row
  { 
    id: 'blog1', 
    type: 'blogArticle', 
    position: { x: -3, y: -3 }, 
    size: '1x1',
    content: { article: { title: 'Siri Aeraade', excerpt: 'Siangopt.', slug: 'siri-aeraade' } } 
  },
  { 
    id: 'social1', 
    type: 'socialEmbed', 
    position: { x: -1, y: -3 }, 
    size: '1x1',
    content: { embed: { title: 'Social Uarde', content: 'MoolaCue' } } 
  },
  { 
    id: 'case1', 
    type: 'caseStudy', 
    position: { x: 1, y: -3 }, 
    size: '1x1',
    content: { study: { title: 'Dsilta Aogure', description: 'Atracooks', slug: 'dsilta-aogure' } } 
  },
  { 
    id: 'break1', 
    type: 'breakingNews', 
    position: { x: 3, y: -3 }, 
    size: '1x1',
    content: { news: { headline: 'Ate Pe Gocts' } } 
  },
  
  // Left column
  { 
    id: 'blog2', 
    type: 'blogArticle', 
    position: { x: -3, y: -1 }, 
    size: '1x1',
    content: { article: { title: 'Stitic Stia', excerpt: 'SiCesarttie', slug: 'stitic-stia' } } 
  },
  { 
    id: 'case2', 
    type: 'caseStudy', 
    position: { x: -3, y: 1 }, 
    size: '1x1',
    content: { study: { title: 'Coebec Coortoy', description: 'Xduncty', slug: 'coebec-coortoy' } } 
  },
  
  // Right column
  { 
    id: 'photo1', 
    type: 'photoUpdate', 
    position: { x: 3, y: -1 }, 
    size: '1x1',
    content: { photo: { title: 'Brcil Peo', src: '/photos/photo1.jpg', alt: 'Viaeit ytaniv' } } 
  },
  { 
    id: 'photo2', 
    type: 'photoUpdate', 
    position: { x: 3, y: 1 }, 
    size: '1x1',
    content: { photo: { title: 'Pitcu', src: '/photos/photo2.jpg', alt: 'Pafieagle' } } 
  },
  
  // Bottom row
  { 
    id: 'test1', 
    type: 'clientTestimonial', 
    position: { x: -3, y: 3 }, 
    size: '1x1',
    content: { testimonial: { quote: 'Corartiabery', author: 'Geng Mari' } } 
  },
  { 
    id: 'social2', 
    type: 'socialEmbed', 
    position: { x: -1, y: 3 }, 
    size: '1x1',
    content: { embed: { title: 'Breroly Ivyith', content: 'End Coovisi' } } 
  },
  { 
    id: 'case3', 
    type: 'caseStudy', 
    position: { x: 1, y: 3 }, 
    size: '1x1',
    content: { study: { title: 'Eudie Corts', description: 'MagangFamitt', slug: 'eudie-corts' } } 
  },
  { 
    id: 'blog3', 
    type: 'blogArticle', 
    position: { x: 3, y: 3 }, 
    size: '1x1',
    content: { article: { title: 'Dentiy Mevo', excerpt: 'Dade Dresg', slug: 'dentiy-mevo' } } 
  },
  
  // Additional cards (middle rows)
  { 
    id: 'social3', 
    type: 'socialEmbed', 
    position: { x: -1, y: -2 }, 
    size: '1x1',
    content: { embed: { title: 'Meul', content: 'Naaoeri' } } 
  },
  { 
    id: 'blog4', 
    type: 'blogArticle', 
    position: { x: 1, y: -2 }, 
    size: '1x1',
    content: { article: { title: 'Bcaf Aanits', excerpt: 'Uohoebae', slug: 'bcaf-aanits' } } 
  },
  { 
    id: 'case4', 
    type: 'caseStudy', 
    position: { x: 3, y: -2 }, 
    size: '1x1',
    content: { study: { title: 'Wai Lvanlo', description: 'Ceocsoladnine', slug: 'wai-lvanlo' } } 
  },
  { 
    id: 'blog5', 
    type: 'blogArticle', 
    position: { x: -3, y: 0 }, 
    size: '1x1',
    content: { article: { title: 'Nadboara-Lhp', excerpt: '', slug: 'nadboara-lhp' } } 
  },
  { 
    id: 'photo3', 
    type: 'photoUpdate', 
    position: { x: -3, y: 2 }, 
    size: '1x1',
    content: { photo: { title: 'Pnacrduneey', src: '/photos/photo3.jpg', alt: 'Magaroes' } } 
  },
  { 
    id: 'test2', 
    type: 'clientTestimonial', 
    position: { x: -1, y: 2 }, 
    size: '1x1',
    content: { testimonial: { quote: 'Theridundey', author: 'Avec Satvive' } } 
  },
  { 
    id: 'blog6', 
    type: 'blogArticle', 
    position: { x: 1, y: 2 }, 
    size: '1x1',
    content: { article: { title: 'Noaobptre', excerpt: 'Uog Costes', slug: 'noaobptre' } } 
  },
  { 
    id: 'photo4', 
    type: 'photoUpdate', 
    position: { x: 3, y: 2 }, 
    size: '1x1',
    content: { photo: { title: 'Socil Madies', src: '/photos/photo4.jpg', alt: 'Apamte' } } 
  },
  { 
    id: 'case5', 
    type: 'caseStudy', 
    position: { x: -3, y: -2 }, 
    size: '1x1',
    content: { study: { title: 'Moeltli', description: 'Netgretbntty', slug: 'moeltli' } } 
  },
  { 
    id: 'break2', 
    type: 'breakingNews', 
    position: { x: 1, y: 0 }, 
    size: '1x1',
    content: { news: { headline: 'Banta' } } 
  },
  { 
    id: 'social4', 
    type: 'socialEmbed', 
    position: { x: 2, y: 0 }, 
    size: '1x1',
    content: { embed: { title: 'SocilUpdate', content: 'Yercore' } } 
  }
];
</script>

<svelte:head>
	<title>Rahuketu - Rahul Nangare's Digital Space</title>
	<meta name="description" content="Interactive portfolio and blog of Rahul Nangare, Sr Cloud Network & Automation Engineer" />
</svelte:head>

<div class="app-container">
	<div class="bento-container">
		<BentoGrid {innerCards} {outerCards} />
	</div>
</div>

<style>
	.app-container {
		width: 100vw;
		height: 100vh;
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #111111;
		color: white;
	}
	
	.bento-container {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}
</style>
