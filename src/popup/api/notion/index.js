import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1";
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

const notionClient = init();

export { notionClient }
