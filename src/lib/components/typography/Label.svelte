<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let text: string | number;
	export let className: string | undefined = undefined;
</script>

<p class={twMerge(`text-dark-gray text-[12px] ${className}`)}>{text}</p>
