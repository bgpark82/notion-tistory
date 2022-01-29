import {PostSaveResponse} from "./save/PostSaveResponse";
import {tistoryClient} from "./index";
import qs from "qs";

class TistoryApi {

    /**
     * @param {PostSaveRequest}
     * @returns {PostSaveResponse}
     */
    async post(request) {
        const query = qs.stringify(request, value => encodeURIComponent(value));
        const response = await tistoryClient.post(`/apis/post/write?${query}`);
        return new PostSaveResponse(response);
    }
}

const tistoryApi = new TistoryApi();

export { tistoryApi }
