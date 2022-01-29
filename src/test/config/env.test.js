describe("환경변수 설정 테스트", () => {

    test("환경변수를 조회한다",() => {
        expect(process.env.TISTORY_ACCESS_TOKEN).not.toBeNull();
    })
})
