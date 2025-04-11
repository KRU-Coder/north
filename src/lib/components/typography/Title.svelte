<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let text: string | number;
	export let className: string = '';
</script>

<h1 class={twMerge(`text-bruma text-5xl`, className)}>
	{`$${text}`}
</h1>
