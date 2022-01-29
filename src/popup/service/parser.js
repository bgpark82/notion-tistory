const TISTORY_ALLOWED_TAG = ["paragraph", "bulleted_list_item", "numbered_list_item", "header_1", "header_2", "header_3"]

function getContent(response) {
    let content = '';
    for (const result of response.results) {
        if (TISTORY_ALLOWED_TAG.includes(result.type)) {
            if (result[result.type].text[0]) { // 공백 제외
                const text = result[result.type].text[0].text.content;
                content += `<p>${text}</p>`
            }
        }
        if (result.type == "image") {
            const imageUrl = result[result.type].file.url;
            content += `<img src="${imageUrl}" alt="image" />\n`
        }
    }
    return content;
}

export { getContent }
