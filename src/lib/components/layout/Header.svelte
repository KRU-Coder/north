<script lang="ts">
	import { showHalfSidebar } from '$lib/stores/misc';
	import DockeIcon from '$lib/components/icons/DockIcon.svelte';
	import DockRight from '$lib/components/icons/DockRight.svelte';
	import Input from '$lib/components/forms/Input.svelte';
	import SearchIcon from '$lib/components/icons/SearchIcon.svelte';
	import QuestionMarkIcon from '$lib/components/icons/QuestionMarkIcon.svelte';
	import BellIcon from '$lib/components/icons/BellIcon.svelte';
	import SmallParagraph from '../typography/SmallParagraph.svelte';
	import Label from '../typography/Label.svelte';
	import UpDownIcon from '../icons/UpDownIcon.svelte';

	const handleSidebar = () => {
		showHalfSidebar.set(!$showHalfSidebar);
	};
</script>

<div class="flex w-full items-center justify-between">
	<div class="hidden w-28 md:block">
		<button type="button" class="cursor-pointer" on:click={handleSidebar}>
			{#if $showHalfSidebar}
				<DockeIcon />
			{:else}
				<DockRight />
			{/if}
		</button>
	</div>
	<div class="hidden w-full md:block">
		<Input name="Search" type="search" placeholder="Enter keyword to search" icon={SearchIcon} />
	</div>
	<div class="flex items-center  gap-5 md:gap-10">
		<div class="flex items-center gap-10">
			<QuestionMarkIcon />
			<BellIcon />
		</div>
		<div class="text-dark-gray">|</div>
		<button type="button" class="flex cursor-pointer items-center gap-3 text-left">
			<div class="h-[40px] w-[40px] overflow-hidden rounded-full">
				<img src="/images/userPlaceholder.png" alt="user-img" class="h-full w-full object-cover" />
			</div>
			<div class="flex items-center gap-5">
				<div>
					<SmallParagraph text="Khem Upreti" />
					<Label text="example@gmail.com" />
				</div>

				<UpDownIcon />
			</div>
		</button>
	</div>
</div>
