import axios from "axios";

class ApiClient {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(url) {
        return await axios(this.baseUrl + url);
    }

    async post(url, option) {
        const base = { method : 'POST'}
        return await axios(this.baseUrl + url, {...base, ...option});
    }
}

export { ApiClient }
