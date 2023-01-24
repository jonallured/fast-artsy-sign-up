chrome.commands.onCommand.addListener(async (command) => {
  if (command !== "fillForm") return

  const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
  chrome.scripting.executeScript({
    files: ["scripts/fillForm.js"],
    target: { tabId: tab.id },
  });
});
