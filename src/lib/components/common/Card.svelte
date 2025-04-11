<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import Title from '../typography/Title.svelte';
	import Overline from '../typography/Overline.svelte';
	import Pills from './Pills.svelte';
	import type { IPills } from '$lib/types/components/pill';
	export let title: string;
	export let amount: number;
	export let icon: typeof SvelteComponent | any;
	export let pilldata: IPills | undefined = undefined;
</script>

<div class="rounded-[6px] border border-slate-300 p-[23px]">
	<div class="flex items-start justify-between">
		<div>
			<Overline text={title} className="mb-4" />
			<Title text={amount} />

			{#if pilldata && pilldata.text}
				<div class="mt-[16px] flex items-center gap-4">
					<Pills text={pilldata.text} icon={pilldata.icon} className={pilldata.className} />
					<div class="text-dark-gray text-xs">{pilldata.subTitle}</div>
				</div>
			{/if}
		</div>
		<div>
			<svelte:component this={icon} />
		</div>
	</div>
</div>
