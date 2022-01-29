class BlockListRequest {

    /**
     * @param {string} pageId 페이지 블록 아이디
     * @param {number} pageSize 페이지 사이즈
     */
    constructor(pageId, pageSize) {
        this.pageId = pageId;
        this.pageSize = pageSize;
    }
}

export { BlockListRequest }
