import axiosBase from 'axios';

const axios = axiosBase.create({
	// This is development host
	baseURL: process.env.VUE_APP_URL,
	timeout: 10000,
});

const ApiService = {
	async get(resource, params) {
		try {
			return await axios.get(`/${resource}`, {params: params })
		} catch (err) {
			throw new Error(`ApiService: ${err.message}`);
		}
	},

	async post(resource, body) {
		try {
			return await axios.post(`/${resource}`, body);
		} catch (err) {
			throw new Error(`ApiService: ${err.message}`);
		}
	},

	async put(resource, body) {
		try {
			return await axios.put(`/${resource}`, body);
		} catch (err) {
			throw new Error(`ApiService: ${err}`);
		}
	},

	async delete(resource, params) {
		try {
			return await axios.delete(`/${resource}`, {params: params });
		} catch (err) {
			throw new Error(`ApiService: ${err}`);
		}
	},
};

export default ApiService;
