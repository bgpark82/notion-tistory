import {BlockListResponse} from "./list/BlockListResponse";
import {notionClient} from "./index";

class NotionApi {

    /**
     * @param {BlockListRequest}
     * @returns {BlockListResponse}
     */
    async list(request) {
        const response = await notionClient.get(`/blocks/${request.pageId}/children?page_size=${request.pageSize}`);
        return new BlockListResponse(response);
    }
}

const notionApi = new NotionApi();

export { notionApi }
