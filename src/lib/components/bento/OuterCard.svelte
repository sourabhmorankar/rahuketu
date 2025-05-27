<script lang="ts">
import BlogArticle from './cards/BlogArticle.svelte';
import CaseStudy from './cards/CaseStudy.svelte';
import SocialEmbed from './cards/SocialEmbed.svelte';
import PhotoUpdate from './cards/PhotoUpdate.svelte';
import ClientTestimonial from './cards/ClientTestimonial.svelte';
import BreakingNews from './cards/BreakingNews.svelte';
import { useGrid } from '../../state/grid.svelte';
import type { OuterCardType } from '$lib/types/content';

let { card, content = {} } = $props();
const grid = useGrid();

const map: Record<OuterCardType, any> = {
  blogArticle: BlogArticle,
  caseStudy: CaseStudy,
  socialEmbed: SocialEmbed,
  photoUpdate: PhotoUpdate,
  clientTestimonial: ClientTestimonial,
  breakingNews: BreakingNews
};

const Comp = map[card.type as OuterCardType] ?? null;
const isSelected = $derived(grid.selected === card.id);
const transform = $derived(`translate(${card.position.x * 200}px, ${card.position.y * 200}px)`);

function handleClick() {
  grid.selectCard(card.id);
}
</script>

<div
  class="outer-card"
  class:selected={isSelected}
  style="transform: {transform}"
  onclick={handleClick}
  onkeydown={(e) => e.key === 'Enter' && handleClick()}
  role="button"
  tabindex="0"
>
  {#if Comp}
    <Comp card={card} {...content} />
  {:else}
    <div class="unknown-card">Unknown Card</div>
  {/if}
</div>

<style>
  .outer-card {
    position: absolute;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    width: 180px;
    height: 180px;
    overflow: hidden;
  }
  
  .outer-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  .outer-card.selected {
    z-index: 10;
    box-shadow: 0 0 0 3px #f59e42;
  }
  
  .unknown-card {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    text-align: center;
    color: #666;
  }
</style>
