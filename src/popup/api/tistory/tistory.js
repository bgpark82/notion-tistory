import {ApiClient} from "../index";

class TistoryApi {

    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * @param {PostSaveRequest}
     * @returns {Promise<any>}
     */
    async post(request) {
        return await this.apiClient.post(`/apis/post/write?access_token=${request.token}&title=${(encodeURI(request.title))}&blogName=${request.blog}&content=${encodeURIComponent(request.content)}`);
    }
}

const tistoryApi = new TistoryApi(new ApiClient(`https://www.tistory.com`));

export { tistoryApi }
