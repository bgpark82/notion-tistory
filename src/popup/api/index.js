class ApiClient {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(url) {
        const response = await fetch(this.baseUrl + url);
        return await response.json();
    }

    async post(url, option) {
        const base = { method : 'POST'}
        const response = await fetch(this.baseUrl + url, {...base, ...option});
        return await response.json();
    }
}

export { ApiClient }
