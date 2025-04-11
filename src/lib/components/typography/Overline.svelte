<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let text: string | number;
	export let className: string = '';
</script>

<p class={twMerge(`text-bruma text-base`, className)}>
	{text}
</p>
