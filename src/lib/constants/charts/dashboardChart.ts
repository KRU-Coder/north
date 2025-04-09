export const lineOptions = {
	responsive: true,
	scales: {
		x: {
			offset: true,
			ticks: {
				padding: 10
			}
		},
		y: {
			beginAtZero: true
		}
	},
	plugins: {
		legend: {
			display: false
		},
		tooltip: {
			intersect: false,
			mode: 'nearest'
		},
		datalabels: {
			display: false
		}
	}
};

export const multiBartOptions = {
	responsive: true,
	plugins: {
		legend: {
			position: 'bottom',
			labels: {
				font: {
					size: 14
				}
			}
		},
		datalabels: {
			color: 'white',
			font: {
				weight: 'bold',
				size: 14
			},
			anchor: 'end',
			align: 'top'
		}
	},
	scales: {
		x: {
			beginAtZero: true
		},
		y: {
			beginAtZero: true
		}
	}
};

export const pieOptions = {
	responsive: true,
	plugins: {
		legend: {
			position: 'right',
			labels: {
				usePointStyle: true,
				padding: 20,
				font: {
					size: 14
				}
			}
		},
		datalabels: {
			color: 'white',
			font: {
				weight: 'bold',
				size: 14
			},
			anchor: 'center',
			align: 'center'
		}
	},
	hoverOffset: 25,
	borderWidth: 0,
	offset: 0,
	interaction: {
		mode: 'nearest',
		intersect: false
	}
};
