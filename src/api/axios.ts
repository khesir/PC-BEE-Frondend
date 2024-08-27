import axios, { AxiosRequestConfig } from 'axios';

export interface ApiResponse<T> {
	data: T;
}

export const getAuthToken = (): string | null => {
	return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token: string | null): void => {
	if (token !== null) {
		window.localStorage.setItem('auth_token', token);
	} else {
		window.localStorage.removeItem('auth_token');
	}
};

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = async <T>(
	method: AxiosRequestConfig['method'],
	url: string,
	data?: T
): Promise<T> => {
	const headers: Record<string, string> = {};

	const authToken = getAuthToken();
	if (authToken !== null && authToken !== 'null') {
		headers.Authorization = `Bearer ${authToken}`;
	}

	return axios({
		method: method,
		url: url,
		headers: headers,
		data: data,
	});
};