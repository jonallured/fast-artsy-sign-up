const form = document.querySelector("form[data-test='SignUpForm']")
const email = `jon.allured+${Date.now()}@gmail.com`;

const fields = [
  { selector: "input[name='name']", value: "Jonathan Allured" },
  { selector: "input[name='email']", value: email },
  { selector: "input[name='password']", value: "Password1" },
]

fields.forEach(field => {
  const input = form.querySelector(field.selector);
  input.value = field.value;
  const event = new Event('input', { 'bubbles': true });
  input.dispatchEvent(event);
});

const signupButton = form.querySelector("button[type='submit']")
signupButton.click()
