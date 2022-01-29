import {TISTORY_ACCESS_TOKEN} from "../../../lib/env";
import {notionApi} from "../api/notion";
import {tistoryApi} from "../api/tistory";
import {parseService} from "./parser";

class PostService {

    async post(blockId, blockTitle) {
        const response = await notionApi.list(blockId, 100);
        const content = parseService.toHtml(response);
        return await tistoryApi.post(blockTitle, content, 'bgpark', TISTORY_ACCESS_TOKEN);
    }
}

const postService = new PostService();

export { postService }
