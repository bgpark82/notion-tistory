const $notion = document.querySelector(".notion-frame");

$notion.addEventListener('click', async (e) => {
    const $target = e.target;
    const $block = $target.closest("div[data-block-id]");
    if (!$block) return;

    const block = {
        id : $block.dataset.blockId,
        title : $target.innerText
    }

    chrome.storage.sync.set({block});
})
