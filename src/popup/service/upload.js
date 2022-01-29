import {TISTORY_ACCESS_TOKEN} from "../../../lib/env";
import {notionApi} from "../api/notion";
import {tistoryApi} from "../api/tistory";
import {getContent} from "./parser";

async function upload(blockId, blockTitle) {
    const response = await notionApi.list(blockId, 100);

    const content = getContent(response);

    return await tistoryApi.post(blockTitle, content, 'bgpark', TISTORY_ACCESS_TOKEN);
}

export default upload;
