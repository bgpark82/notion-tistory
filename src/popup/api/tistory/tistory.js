import {PostSaveResponse} from "./save/PostSaveResponse";
import qs from "qs";
import {tistoryClient} from "../index";

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
