import {ApiClient} from "../index";

class NotionApi {

    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * @param {BlockListRequest}
     * @returns {Promise<any>}
     */
    async list(request) {
        return await this.apiClient.get(`blocks/${request.pageId}/children?page_size=${request.pageSize}`)
    }
}

const notionApi = new NotionApi(new ApiClient(`http://localhost:3000/api/v1/`));

export { notionApi }
