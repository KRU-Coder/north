<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let text: string | number;
	export let className: string | undefined = undefined;
</script>

<h1 class={twMerge(`text-bruma text-[48px]  ${className}`)}>
	{`$${text}`}
</h1>
