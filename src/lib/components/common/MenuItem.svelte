<script lang="ts">
	import { goto } from '$app/navigation';
	import type { SvelteComponent } from 'svelte';
	export let text: string;
	export let link: string;
	export let icon: typeof SvelteComponent | any;
	export let isActive: boolean = false;
	export let isOnlyIcon: boolean = false;

	import { twMerge } from 'tailwind-merge';

	const handleRedirect = () => {
		goto(link);
	};
</script>

<button
	type="button"
	onclick={handleRedirect}
	class={twMerge(
		`text-bruma ${isOnlyIcon ? 'inline-flex' : 'flex w-full'}  cursor-pointer items-center gap-4 rounded-[6px] border   ${isActive ? 'border-slate-300 bg-white' : 'border-transparent bg-transparent'} px-[20px] py-[21px] text-sm font-semibold`
	)}
>
	{#if isOnlyIcon}
		<svelte:component this={icon} />
	{:else}
		<svelte:component this={icon} />
		<div class="w-full cursor-pointer text-left">
			{text}
		</div>
	{/if}
</button>
