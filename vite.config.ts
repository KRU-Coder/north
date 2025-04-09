import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		allowedHosts: [
			'ee09-202-166-206-8.ngrok-free.app'
			// You can add other allowed hosts here if needed
		]
	},
	plugins: [tailwindcss(), sveltekit()]
});
