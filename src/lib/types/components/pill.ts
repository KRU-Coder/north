import type { SvelteComponent } from 'svelte';

export interface IPills {
	text: string;
	icon?: typeof SvelteComponent | unknown;
	className?: string;
	subTitle: string;
}
