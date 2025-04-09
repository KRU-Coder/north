export interface ISavingsTrends {
	savings: number;
	month: string;
}

export interface ISavingsByCategory {
	service: string;
	savings: number;
}

export interface IDetailedSavings {
	date: string;
	service: string;
	amount: number;
}
