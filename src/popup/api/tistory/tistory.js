import {ApiClient} from "../index";
import {PostSaveResponse} from "./PostSaveResponse";

class TistoryApi {

    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * @param {PostSaveRequest}
     * @returns {PostSaveResponse}
     */
    async post(request) {
        const response = await this.apiClient.post(`/apis/post/write?access_token=${request.token}&title=${(encodeURI(request.title))}&blogName=${request.blog}&content=${encodeURIComponent(request.content)}`);
        return new PostSaveResponse(response);
    }
}

const tistoryApi = new TistoryApi(new ApiClient(`https://www.tistory.com`));

export { tistoryApi }
