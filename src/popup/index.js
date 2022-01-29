import {postService} from "./service/post";

const $id = document.getElementById("block-id")
const $title = document.getElementById("block-title");
const $button = document.getElementById("button");

chrome.storage.sync.get("block", ({block}) => {
    $title.innerHTML = block.title;
    $id.innerHTML = block.id;
});

$button.addEventListener('click', async () => {
    const response = await postService.post($id.innerHTML, $title.innerHTML);
    alert(response)
})
