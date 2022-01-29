import axios from "axios";

const TISTORY_BASE_URL = "https://www.tistory.com";
const NOTION_BASE_URL = "http://localhost:3000/api/v1";
const TIMEOUT = 5000;

function init(baseURL) {
    return axios.create({
        baseURL,
        timeout: TIMEOUT,
        headers: {
            'Content-Type': "application/json",
        }
    })
}

const tistoryClient = init(TISTORY_BASE_URL);
const notionClient = init(NOTION_BASE_URL);

export {tistoryClient, notionClient}
