import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 3000
		// proxy: {
		// 	'/api': 'https://north-case-api.vercel.app'
		// }
	},
	define: {
		__SVELTE_DEV__: true
	},
	plugins: [tailwindcss(), sveltekit()]
});
