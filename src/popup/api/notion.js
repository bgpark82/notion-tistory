const BASE_URL = `http://localhost:3000`;

class NotionApi {

    async list(blockId, pageSize) {
        const response = await fetch(`${BASE_URL}/api/v1/blocks/${blockId}/children?page_size=${pageSize}`)
        return await response.json();
    }
}

const notionApi = new NotionApi();

export { notionApi }
