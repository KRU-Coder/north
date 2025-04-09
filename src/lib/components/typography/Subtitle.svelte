<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let text: string | number;
	export let className: string | undefined = undefined;
</script>

<h4 class={twMerge(`text[20px] text-bruma font-semibold ${className}`)}>
	{text}
</h4>
