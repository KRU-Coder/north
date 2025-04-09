// menu.ts
import DashboardIcon from '$lib/components/icons/DashboardIcon.svelte';
import BookIcon from '$lib/components/icons/BookIcon.svelte';
import GroupIcon from '$lib/components/icons/GroupIcon.svelte';
import SeetingIcon from '$lib/components/icons/SettingIcon.svelte';

export const mainMenu = [
	{
		link: '/',
		text: 'Dashboard',
		icon: DashboardIcon
	},
	{
		link: '/reports',
		text: 'Reports',
		icon: BookIcon
	},
	{
		link: '/teams',
		text: 'Teams',
		icon: GroupIcon
	},
	{
		link: '/setting',
		text: 'Setting',
		icon: SeetingIcon
	}
];
