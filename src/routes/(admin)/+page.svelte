<script lang="ts">
	import Card from '$lib/components/common/Card.svelte';
	import Subtitle from '$lib/components/typography/Subtitle.svelte';
	import PigyBankIcon from '$lib/components/icons/PigyBankIcon.svelte';
	import CalendarIcon from '$lib/components/icons/CalendarIcon.svelte';
	import UpArrow from '$lib/components/icons/UpArrow.svelte';
	import LineChart from '$lib/components/charts/LineChart.svelte';
	import PieChart from '$lib/components/charts/PieChart.svelte';
	import GroupedBarChart from '$lib/components/charts/GroupedBarChart.svelte';
	import { lineOptions, pieOptions, multiBartOptions } from '$lib/constants/charts/dashboardChart';
	import { groupBarFilter, lineChartFilter, pieChartFilter } from '$lib/helper/dashboardDataFIlter';
	import apiResponse from '$lib/constants/apiResponse.json';
	import DashboardService from '$lib/services/dashboard';
	import { onMount } from 'svelte';
	import toast from 'svelte-french-toast';
	const dashboardService = new DashboardService();

	const { data: lineData, labels: lineLabels } = lineChartFilter(apiResponse.savingsTrends);

	const { data: pieData, labels: pieLabels } = pieChartFilter(apiResponse.savingsByCategory);

	const {
		data: barData,
		labels: barLabels,
		services: barServices
	} = groupBarFilter(apiResponse.detailedSavings);

	let lineDataFromApi: string[] = [];
	let lineLabelsFromAPi: number[] = [];

	let dashboardData;

	onMount(async () => {
		try {
			const resp = await dashboardService.getAll();

			// if (resp) {
			// 	const { data, labels } = lineChartFilter(resp.savingsTrends || apiResponse.savingsTrends);
			// 	lineDataFromApi = data;
			// 	lineLabelsFromAPi = labels;
			// }

			// dashboardData = resp;
			console.log({ resp });
		} catch (error: any) {
			console.log(error);
			toast.error(error?.message || 'Error fetching data');
		}
	});
</script>

<div>
	<Subtitle text="Overview" />

	<div class="grid grid-cols-1 gap-5 md:my-5 md:grid-cols-2">
		<Card title="Total Saving" amount={1200.5} icon={PigyBankIcon} />
		<Card
			title="Current Month Saving"
			amount={200.75}
			icon={CalendarIcon}
			pillText={`15.5%`}
			pillIcon={UpArrow}
			pillClass="bg-green-600"
			pillSubTitle="vs Last Month"
		/>
	</div>

	<Subtitle text="Saving Trends" />

	<div class="rounded-[6px] border border-slate-300 p-5 md:my-5">
		<LineChart
			labels={lineLabels}
			data={lineData}
			borderColor="#8979FF"
			height="80"
			options={lineOptions}
		/>
	</div>

	<div class="md:grid md:grid-cols-2 md:gap-10">
		<div>
			<Subtitle text="Saving by Category" className="my-5" />
			<div class="rounded-[6px] border border-slate-300">
				<div class="mx-auto flex items-center justify-center p-5 md:h-[550px]">
					<PieChart
						labels={pieLabels}
						data={pieData}
						colors={['#63CFE5', '#A194FF', '#FFA8A1', '#A277AA']}
						options={pieOptions}
					/>
				</div>
			</div>
		</div>

		<div>
			<Subtitle text="Detailed Saving" className="my-5" />
			<div class="rounded-[6px] border border-slate-300">
				<div class="mx-auto flex items-center justify-center p-5 md:h-[550px]">
					<GroupedBarChart
						services={barServices}
						labels={barLabels}
						colors={['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']}
						options={multiBartOptions}
						data={barData}
					/>
				</div>
			</div>
		</div>
	</div>
</div>
