function getEnv(key: keyof ImportMetaEnv, required = true): string {
	const value = import.meta.env[key];
	if (required && !value) {
		throw new Error(`Environment variable ${key} is required but not defined.`);
	}
	return value!;
}

export const config = {
	apiUrl: getEnv('VITE_API_URL'),
	apiKey: getEnv('VITE_API_KEY')
};
