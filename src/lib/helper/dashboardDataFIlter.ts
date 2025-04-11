import type { IDetailedSavings, ISavingsByCategory, ISavingsTrends } from '$lib/types/apiResponse';

export const lineChartFilter = (savingsTrends: ISavingsTrends[]) => {
	const [labels, data] = savingsTrends.reduce(
		([labels, data]: [string[], number[]], { month, savings }) => {
			labels.push(month);
			data.push(savings);
			return [labels, data];
		},
		[[], []] as [string[], number[]]
	);

	const colors = '#8979FF';

	return { labels, data, colors };
};

export const pieChartFilter = (savingsByCategory: ISavingsByCategory[]) => {
	const labels = savingsByCategory.map((item) => item.service);
	const total = savingsByCategory.reduce((acc, item) => acc + item.savings, 0);
	const data = savingsByCategory.map((item) =>
		total ? parseFloat(((item.savings / total) * 100).toFixed(2)) : 0
	);

	const colors = ['#63CFE5', '#A194FF', '#FFA8A1', '#A277AA'];

	return { labels, data, colors };
};

export const groupBarFilter = (detailedSavings: IDetailedSavings[]) => {
	const dates = Array.from(new Set(detailedSavings.map((item) => item.date)));
	const services = Array.from(new Set(detailedSavings.map((item) => item.service)));

	const data = detailedSavings.reduce(
		(acc, { date, service, amount }) => {
			if (!acc[service]) {
				acc[service] = Array.from(dates, () => 0);
			}
			const index = dates.findIndex((d) => date === d);
			acc[service][index] = amount;
			return acc;
		},
		{} as Record<string, number[]>
	);
	const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];
	return { data, services, labels: dates, colors };
};
