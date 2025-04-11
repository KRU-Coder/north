<script context="module" lang="ts">
	import { page } from '$app/stores';
</script>

<script lang="ts">
	import { showHalfSidebar } from '$lib/stores/misc';
	import MenuItem from '$lib/components/common/MenuItem.svelte';
	import { mainMenu } from '$lib/constants/menu';
	import LogoutIcon from '../icons/LogoutIcon.svelte';

	$: pathName = $page.url.pathname;

	const isActive = (link: string, index: number) => {
		if (index === 0 && (pathName === '/' || pathName === '/dashboard')) {
			return true;
		}
		return pathName === link;
	};
</script>

<div class="text-nebula relative h-full">
	<div class="pt-5">
		{#if $showHalfSidebar}
			<svg
				width="35"
				height="25"
				viewBox="0 0 56 45"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="mx-auto"
			>
				<path
					d="M0.770996 34.5171V45L28.2701 39.2984L55.771 45V34.5171L28.2701 23.5786L0.770996 34.5171Z"
					fill="#D591FE"
				/>
				<path
					d="M28.2701 0L0.770996 18.7924V29.2758L28.2701 15.7196L55.771 29.2758V18.7924L28.2701 0Z"
					fill="#D591FE"
				/>
			</svg>
		{:else}
			<img src="./images/logo.svg" alt="" width="200" class="mx-auto" />
		{/if}
	</div>

	<ul class="mt-10 pl-4">
		{#each mainMenu as menu, index}
			<li>
				<MenuItem
					text={menu.text}
					link={menu.link}
					icon={menu.icon}
					isActive={isActive(menu.link, index)}
					isOnlyIcon={$showHalfSidebar}
				/>
			</li>
		{/each}
	</ul>
	<div class={`text-bruma absolute bottom-10 ml-4 ${$showHalfSidebar ? '' : 'w-full'}`}>
		<button
			type="button"
			class={`text-bruma flex w-full  cursor-pointer items-center gap-4 rounded-[6px] border border-slate-300 bg-white px-[20px] py-[21px] text-sm font-semibold`}
		>
			<LogoutIcon />
			<div>
				{#if !$showHalfSidebar}
					Logout
				{/if}
			</div>
		</button>
	</div>
</div>
