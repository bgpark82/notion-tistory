const BASE_URL = `http://localhost:3000`;

class NotionApi {

    /**
     * @param {BlockListRequest}
     * @returns {Promise<any>}
     */
    async list(request) {
        const response = await fetch(`${BASE_URL}/api/v1/blocks/${request.pageId}/children?page_size=${request.pageSize}`)
        return await response.json();
    }
}

const notionApi = new NotionApi();

export { notionApi }
