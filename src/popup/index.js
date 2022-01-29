console.log("팝업")

const $blockId = document.getElementById("block-id");

chrome.storage.sync.get("block", ({block}) => {
    console.log(block)
    $blockId.innerHTML = block;
});
