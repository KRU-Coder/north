<script lang="ts">
	import { showHalfSidebar } from '$lib/stores/misc';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../../app.css';
	import { Toaster } from 'svelte-french-toast';

	let { children } = $props();
</script>

<div class="bg-gray font-primary overflow-hidden md:h-screen">
	<div
		class={`bg-gray top-0 left-0 hidden h-screen w-full transition-all md:fixed md:block ${$showHalfSidebar ? 'md:max-w-28' : 'md:max-w-60'}`}
	>
		<Sidebar />
	</div>
	<div
		class={`${$showHalfSidebar ? 'md:ml-28' : 'md:ml-70'} overflow-hidden rounded-[20px] border border-slate-300 bg-white transition-all md:my-5 md:mr-5`}
	>
		<div class="sticky top-0 z-10 border-b border-b-slate-300 bg-white p-5">
			<Header />
		</div>
		<div class="h-[calc(97vh-84px)] overflow-y-auto p-5">
			{@render children()}
		</div>
	</div>
	<Toaster />
</div>
