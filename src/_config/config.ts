// Object Oriented Configuration approach to add logics when setting values such as:
// - Validation for specific api keys
// - Base url changes
// - etc.. (More complex global setting)

class ConfigManager {
	private static instance: ConfigManager;
	private baseURL: string;

	constructor() {
		this.baseURL = 'http://localhost:5000';
	}

	public static getInstance(): ConfigManager {
		if (!ConfigManager.instance) {
			ConfigManager.instance = new ConfigManager();
		}
		return ConfigManager.instance;
	}

	// Getter for the base URL
	getBaseURL(): string {
		return this.baseURL;
	}

	// Method to update base URL if needed
	setBaseURL(url: string): void {
		this.baseURL = url;
	}
}

export default ConfigManager.getInstance();
