import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit()
	],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,ts,svelte}'],
		setupFiles: ['./tests/setup.js']
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules/firebase')) {
						return 'firebase';
					}
					if (id.includes('node_modules/animejs')) {
						return 'animations';
					}
					if (id.includes('src/lib/components')) {
						return 'components';
					}
				}
			}
		}
	}
});
