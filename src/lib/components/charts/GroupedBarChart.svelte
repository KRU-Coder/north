<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Chart,
		BarElement,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend,
		Title,
		BarController
	} from 'chart.js';
	import ChartDataLabels from 'chartjs-plugin-datalabels';

	Chart.register(
		BarController,
		BarElement,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend,
		Title,
		ChartDataLabels
	);

	export let labels: string[] = [];
	export let data: { [service: string]: number[] } = {};
	export let services: string[] = [];
	export let colors: string[] = [];
	export let options: any = {};

	let canvas: HTMLCanvasElement;
	let chart: Chart;

	const datasets = services.map((service, index) => ({
		label: service,
		data: labels.map((date) => (data[service] ? data[service][labels.indexOf(date)] : 0)),
		backgroundColor: colors.length ? colors[index] : '',
		borderColor: '#ffffff',
		borderWidth: 1
	}));

	onMount(() => {
		chart = new Chart(canvas, {
			type: 'bar',
			data: {
				labels,
				datasets
			},
			options
		});

		return () => chart.destroy();
	});
</script>

<canvas bind:this={canvas}></canvas>
