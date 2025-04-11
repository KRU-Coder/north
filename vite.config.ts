import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(({ mode }) => ({
	server: {
		port: 3000
	},
	plugins: [tailwindcss(), sveltekit()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './setup.ts',
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		conditions: mode === 'test' ? ['browser'] : ['browser', 'node']
	}
}));
