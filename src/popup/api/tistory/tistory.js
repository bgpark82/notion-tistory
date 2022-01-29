import {PostSaveResponse} from "./save/PostSaveResponse";
import {tistoryClient} from "./index";

class TistoryApi {

    /**
     * @param {PostSaveRequest}
     * @returns {PostSaveResponse}
     */
    async post(request) {
        const response = await tistoryClient.post(`/apis/post/write?access_token=${request.token}&title=${(encodeURI(request.title))}&blogName=${request.blog}&content=${encodeURIComponent(request.content)}`);
        return new PostSaveResponse(response);
    }
}

const tistoryApi = new TistoryApi();

export { tistoryApi }
