<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Chart,
		LineController,
		LineElement,
		PointElement,
		LinearScale,
		Title,
		Tooltip,
		CategoryScale,
		Legend
	} from 'chart.js';

	Chart.register(
		LineController,
		LineElement,
		PointElement,
		LinearScale,
		CategoryScale,
		Title,
		Tooltip,
		Legend
	);

	export let labels: string[] = [];
	export let datasetLabel: string = 'Dataset';
	export let data: number[] = [];
	export let options: any = {};
	export let borderColor: string = '';
	export let tension: number = 0;

	export let height: string | number = '100px';

	let canvas: HTMLCanvasElement;
	let chart: Chart;

	onMount(() => {
		chart = new Chart(canvas, {
			type: 'line',
			data: {
				labels,
				datasets: [
					{
						label: datasetLabel,
						data,
						borderColor: borderColor,
						backgroundColor: '#fff',
						fill: true,
						tension: tension,
						pointRadius: 8,
						borderWidth: 4,
						pointBorderWidth: 4
					}
				]
			},
			options
		});

		return () => chart.destroy();
	});
</script>

<canvas bind:this={canvas} {height} data-testid="line-chart"></canvas>
