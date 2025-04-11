<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let text: string | number;
	export let className: string = '';
</script>

<h4 class={twMerge(`text-bruma text-xl font-semibold`, className)}>
	{text}
</h4>
