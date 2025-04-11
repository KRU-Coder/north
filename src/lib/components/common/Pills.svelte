<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	export let text: string | number | undefined;
	export let className: string | undefined = undefined;
	export let icon: typeof SvelteComponent | any = undefined;
</script>

<div
	class={twMerge(
		`inline-flex items-center gap-2 rounded-md bg-red-900 px-3 py-1 text-base text-white`,
		className
	)}
>
	{#if icon}
		<svelte:component this={icon} />
	{/if}
	{text}
</div>
