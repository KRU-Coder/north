<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart, ArcElement, Tooltip, Legend, Title, PieController } from 'chart.js';
	import ChartDataLabels from 'chartjs-plugin-datalabels';

	Chart.register(PieController, ArcElement, Tooltip, Legend, Title, ChartDataLabels);

	export let labels: string[] = [];
	export let data: number[] = [];
	export let colors: string[] = [];
	export let options: any = {};

	export let width: number = 300;
	export let height: number = 300;

	let canvas: HTMLCanvasElement;
	let chart: Chart;

	onMount(() => {
		chart = new Chart(canvas, {
			type: 'pie',
			data: {
				labels,
				datasets: [
					{
						data,
						backgroundColor: colors.length ? colors : ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
						borderWidth: 1
					}
				]
			},
			options
		});

		return () => chart.destroy();
	});
</script>

<canvas bind:this={canvas} {width} {height} data-testid="pie-chart"></canvas>
