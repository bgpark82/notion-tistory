import {BlockListResponse} from "./list/BlockListResponse";
import {notionClient} from "./index";
import qs from "qs";

class NotionApi {

    /**
     * @param {BlockListRequest}
     * @returns {BlockListResponse}
     */
    async list({page_id, page_size}) {
        const query = qs.stringify({page_size});
        const response = await notionClient.get(`/blocks/${page_id}/children?${query}`);
        return new BlockListResponse(response);
    }
}

const notionApi = new NotionApi();

export { notionApi }
