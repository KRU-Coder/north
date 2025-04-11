<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import Title from '../typography/Title.svelte';
	import Overline from '../typography/Overline.svelte';
	import Pills from './Pills.svelte';
	export let title: string;
	export let amount: number;
	export let icon: typeof SvelteComponent | any;
	export let pillIcon: typeof SvelteComponent | any = undefined;
	export let pillText: string = '';
	export let pillClass: string = '';
	export let pillSubTitle: string = '';
</script>

<div class="rounded-[6px] border border-slate-300 p-[23px]">
	<div class="flex items-start justify-between">
		<div>
			<Overline text={title} className="mb-4" />
			<Title text={amount} />

			{#if pillText}
				<div class="mt-[16px] flex items-center gap-4">
					<Pills text={pillText} icon={pillIcon} className={pillClass} />
					<div class="text-dark-gray text-xs">{pillSubTitle}</div>
				</div>
			{/if}
		</div>
		<div>
			<svelte:component this={icon} />
		</div>
	</div>
</div>
