import {ApiClient} from "../index";
import {BlockListResponse} from "./BlockListResponse";

class NotionApi {

    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * @param {BlockListRequest}
     * @returns {BlockListResponse}
     */
    async list(request) {
        const response = await this.apiClient.get(`blocks/${request.pageId}/children?page_size=${request.pageSize}`);
        return new BlockListResponse(response);
    }
}

const notionApi = new NotionApi(new ApiClient(`http://localhost:3000/api/v1/`));

export { notionApi }
