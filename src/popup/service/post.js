import {TISTORY_ACCESS_TOKEN} from "../../../lib/env";
import {notionApi} from "../api/notion/notion";
import {tistoryApi} from "../api/tistory/tistory";
import {parseService} from "./parser";
import {BlockListRequest} from "../api/notion/list/BlockListRequest";
import {PostSaveRequest} from "../api/tistory/save/PostSaveRequest";

class PostService {

    async post(blockId, blockTitle) {
        const response = await notionApi.list(new BlockListRequest(blockId, 100));
        const content = parseService.toHtml(response);
        return tistoryApi.post(new PostSaveRequest(blockTitle, content, 'bgpark', TISTORY_ACCESS_TOKEN));
    }
}

const postService = new PostService();

export { postService }
