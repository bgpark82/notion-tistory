class BlockListResponse {

    /**
     * object: 'list',
     * results: [[Object], [Object]],
     * next_cursor: null,
     * has_more: false
     */
    constructor({status, data}) {
        this.status = status;
        this.type = data.object
        this.results = data.results;
    }
}

export { BlockListResponse }
