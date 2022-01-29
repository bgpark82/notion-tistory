import upload from "./service/upload";

const $id = document.getElementById("block-id")
const $title = document.getElementById("block-title");
const $button = document.getElementById("button");

chrome.storage.sync.get("block", ({block}) => {
    $title.innerHTML = block.title;
    $id.innerHTML = block.id;
});

$button.addEventListener('click', async () => {
    const response = await upload($id.innerHTML, $title.innerHTML);
    if (response) {
        alert("업로드되었습니다")
    }
})
