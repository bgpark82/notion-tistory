import {tistoryApi} from "../../../popup/api/tistory/tistory";
import {PostSaveRequest} from "../../../popup/api/tistory/save/PostSaveRequest";

describe("티스토리 API 테스트", () => {

    test("티스토리에 글을 업로드한다", async () => {
        const 글_제목 = "제목";
        const 글_내용 = "<div>내용&</div>";
        const 블로그_이름 = "bgpark";
        const 토큰 = process.env.TISTORY_ACCESS_TOKEN;
        const response = await tistoryApi.post(new PostSaveRequest(글_제목, 글_내용, 블로그_이름, 토큰));
        expect(response.status).toBe(200);
    })
})
