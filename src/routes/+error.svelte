<script>
	import { goto } from '$app/navigation';
	import '../app.css';

	import { onMount } from 'svelte';
	let animate = false;

	onMount(() => {
		animate = true;
	});

	const handleNav = () => {
		goto('/');
	};
</script>

<div
	class="bg-gray relative flex h-screen w-screen items-center justify-center overflow-hidden text-white select-none"
>
	<div class="relative z-10 flex flex-col items-center text-center">
		<svg
			class={`w-[300px] transition-all duration-1000 ease-in-out sm:w-[400px] ${animate ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
			viewBox="0 0 400 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="200" cy="100" r="60" stroke="url(#grad1)" stroke-width="15" fill="transparent" />
			<path
				d="M70 160 L120 50 L130 50 L130 160 Z"
				stroke="url(#grad2)"
				stroke-width="15"
				fill="transparent"
			/>
			<path
				d="M270 160 L320 50 L330 50 L330 160 Z"
				stroke="url(#grad2)"
				stroke-width="15"
				fill="transparent"
			/>

			<circle cx="200" cy="100" r="20" fill="white" opacity="0.05" />
			<defs>
				<linearGradient
					id="grad1"
					x1="140"
					y1="100"
					x2="260"
					y2="100"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#ff00cc" />
					<stop offset="1" stop-color="#333399" />
				</linearGradient>
				<linearGradient
					id="grad2"
					x1="100"
					y1="50"
					x2="100"
					y2="160"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#00F5A0" />
					<stop offset="1" stop-color="#00D9F5" />
				</linearGradient>
			</defs>
		</svg>

		<p class="text-bruma mt-6 animate-pulse text-lg sm:text-xl">
			You're floating in the void... This page doesn't exist.
		</p>

		<button
			type="button"
			onclick={handleNav}
			class="mt-6 transform cursor-pointer rounded-full bg-white px-6 py-2 font-semibold text-black shadow-xl transition hover:scale-105 hover:bg-gray-100"
		>
			Back To Home
		</button>
	</div>
</div>
