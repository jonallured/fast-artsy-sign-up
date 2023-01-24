chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    files: ["scripts/fillForm.js"],
    target: { tabId: tab.id },
  });
});
