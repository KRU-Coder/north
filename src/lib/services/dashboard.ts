import { config } from '$lib/config/environment';
import ApiService from './api';

class DashboardService extends ApiService {
	constructor() {
		super(config.apiUrl);
	}

	public async getAll() {
		return this.get('');
	}
}

export default DashboardService;
