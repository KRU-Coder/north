import { config } from '$lib/config/environment';

class ApiService {
	private baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	private async request(endpoint: string, options: RequestInit = {}) {
		const url = `${this.baseUrl}${endpoint}`;

		const defaultHeaders = {
			'Content-Type': 'application/json',
			Authorization: config.apiKey
		};

		const response = await fetch(url, {
			...options,
			headers: {
				...defaultHeaders,
				...(options.headers || {})
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		try {
			return await response.json();
		} catch (error: unknown) {
			console.log(error);
			throw new Error('Error parsing JSON response');
		}
	}

	public async get(endpoint: string) {
		return this.request(endpoint, {
			method: 'GET'
		});
	}

	public async post(endpoint: string, data: unknown) {
		return this.request(endpoint, {
			method: 'POST',
			body: JSON.stringify(data)
		});
	}

	public async put(endpoint: string, data: unknown) {
		return this.request(endpoint, {
			method: 'PUT',
			body: JSON.stringify(data)
		});
	}

	public async delete(endpoint: string) {
		return this.request(endpoint, {
			method: 'DELETE'
		});
	}
}

export default ApiService;
