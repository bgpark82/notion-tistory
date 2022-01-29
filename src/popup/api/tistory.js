const BASE_URL = `https://www.tistory.com`;

class TistoryApi {

    /**
     * @param {PostSaveRequest}
     * @returns {Promise<any>}
     */
    async post(request) {
        const response = await fetch(`${BASE_URL}/apis/post/write?access_token=${request.token}&title=${(encodeURI(request.title))}&blogName=${request.blog}&content=${encodeURIComponent(request.content)}`, {method: 'POST'});
        return await response.json();
    }
}

const tistoryApi = new TistoryApi();

export { tistoryApi }
