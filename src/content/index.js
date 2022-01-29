document.body.addEventListener('click', async (e) => {
    const block = e.target.innerText;
    console.log(block)

    chrome.storage.sync.set({block});
})
