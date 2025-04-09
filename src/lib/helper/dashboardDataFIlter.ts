import type { IDetailedSavings, ISavingsByCategory, ISavingsTrends } from '$lib/types/apiResponse';

export const lineChartFilter = (savingsTrends: ISavingsTrends[]) => {
	const labels = savingsTrends.map((item) => item.month);
	const data = savingsTrends.map((item) => item.savings);

	return { labels, data };
};

export const pieChartFilter = (savingsByCategory: ISavingsByCategory[]) => {
	const labels = savingsByCategory.map((item) => item.service);
	const total = savingsByCategory.reduce((acc, item) => acc + item.savings, 0);
	const data = savingsByCategory.map((item) =>
		total ? parseFloat(((item.savings / total) * 100).toFixed(2)) : 0
	);

	return { labels, data };
};

export const groupBarFilter = (detailedSavings: IDetailedSavings[]) => {
	const services = Array.from(new Set(detailedSavings.map((item) => item.service)));
	const labels = Array.from(new Set(detailedSavings.map((item) => item.date)));
	const data = services.reduce(
		(acc, service) => {
			acc[service] = labels.map(() => 0);
			return acc;
		},
		{} as { [key: string]: number[] }
	);

	detailedSavings.forEach((item) => {
		const serviceIndex = services.indexOf(item.service);
		const dateIndex = labels.indexOf(item.date);
		if (serviceIndex !== -1 && dateIndex !== -1) {
			data[item.service][dateIndex] = item.amount;
		}
	});

	return { data, services, labels };
};
