<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let text: string | number;
	export let className: string = '';
</script>

<p class={twMerge(`text-dark-gray text-xs`, className)}>{text}</p>
