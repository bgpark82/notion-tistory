class PostSaveRequest {

    /**
     * @param {string} title 포스트 제목
     * @param {string} content 포스트 컨텐츠
     * @param {string} blog 블로그 이름
     * @param {string} token 엑세스 토큰
     */
    constructor(title, content, blog, token) {
        this.title = title;
        this.content = content;
        this.blogName = blog;
        this.access_token = token;
    }
}

export { PostSaveRequest }
