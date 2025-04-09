<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let name: string;
	export let label: string = '';
	export let placeholder: string = '';
	export let type: string;
	export let icon: typeof SvelteComponent | any | undefined = undefined;
</script>

<div>
	{#if label}
		<label for={name} class="mb-1 inline-block pl-[11px] text-left font-semibold">{label}</label>
	{/if}
	<div class="relative">
		<input
			{type}
			id={name}
			{placeholder}
			class={`rounded-[6px] border border-slate-300 ${icon ? 'pl-14' : ''} px-[11px] py-[10px] outline-none`}
		/>
		{#if icon}
			<div class="absolute top-2.5 left-4">
				<svelte:component this={icon} />
			</div>
		{/if}
	</div>
</div>
