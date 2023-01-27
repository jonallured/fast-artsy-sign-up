const handleConfigReset = async (event) => {
  event.preventDefault();
  chrome.storage.local.clear();
};

const handleConfigSubmit = (event) => {
  event.preventDefault();

  const inputTags = Array.from(document.querySelectorAll("input[type='text']"));

  const config = inputTags.reduce((accumulator, inputTag) => {
    accumulator[inputTag.name] = inputTag.value;
    return accumulator;
  }, {});

  chrome.storage.local.set({ config })
};

const setFormValues = async () => {
  const { config } = await chrome.storage.local.get();

  Object.entries(config).forEach(([name, value]) => {
    const input = document.querySelector(`input[name='${name}']`);
    input.value = value;
  });
};

const setListItems = async () => {
  const { filledEmails } = await chrome.storage.local.get();
  const listTag = document.querySelector("ul");

  filledEmails.forEach(email => {
    const emailNode = document.createTextNode(email);
    const itemTag = document.createElement("li");
    itemTag.appendChild(emailNode);
    listTag.appendChild(itemTag);
  });
};

const initializeForm = () => {
  const [form] = document.getElementsByTagName("form");
  form.addEventListener("reset", handleConfigReset);
  form.addEventListener("submit", handleConfigSubmit);
  setFormValues();

  setListItems();
};

window.addEventListener('load', initializeForm)
