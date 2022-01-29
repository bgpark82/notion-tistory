import axios from "axios";

const BASE_URL = "https://www.tistory.com";
const TIMEOUT = 5000;

function init() {
    return axios.create({
        baseURL: BASE_URL,
        timeout: TIMEOUT,
        headers: {
            'Content-Type': "application/json",
        }
    })
}

const tistoryClient = init();

export { tistoryClient }
