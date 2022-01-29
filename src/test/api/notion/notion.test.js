import {notionApi} from "../../../popup/api/notion/notion";
import {BlockListRequest} from "../../../popup/api/notion/list/BlockListRequest";

describe("노션 API 테스트", () => {

    test("페이지의 블록 리스트를 조회한다", async () => {
        const 페이지_블록_아이디 = "02626cf5-1dc3-429f-9f0b-fa2b14837d2b";
        const 페이지_개수 = 100;
        const response = await notionApi.list(new BlockListRequest(페이지_블록_아이디, 페이지_개수));
        expect(response.status).toBe(200);
    })
})
