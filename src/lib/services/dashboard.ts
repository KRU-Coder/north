import ApiService from './api';

class DashboardService extends ApiService {
	constructor() {
		super(import.meta.env.VITE_API_URL);
	}

	public async getAll() {
		return this.get('/');
	}
}

export default DashboardService;
