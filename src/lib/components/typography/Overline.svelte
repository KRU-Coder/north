<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let text: string | number;
	export let className: string | undefined = undefined;
</script>

<p class={twMerge(`text[16px] text-bruma ${className}`)}>
	{text}
</p>
