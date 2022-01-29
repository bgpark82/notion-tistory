const BASE_URL = `https://www.tistory.com`;

class TistoryApi {

    async post(title, content, blog, token) {
        const response = await fetch(`${BASE_URL}/apis/post/write?access_token=${token}&title=${(encodeURI(title))}&blogName=${blog}&content=${encodeURIComponent(content)}`, {method: 'POST'});
        return await response.json();
    }
}

const tistoryApi = new TistoryApi();

export { tistoryApi }
