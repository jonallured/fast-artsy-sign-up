function getUserFullName() {
  const form = document.getElementById("userFullName")
  if (!form) return;
  form.addEventListener("submit", (event) => {

    event.preventDefault()
    const fields = {
      firstName: document.querySelector("input[name=firstName]").value,
      lastName: document.querySelector("input[name=lastName]").value
    }
    console.log(fields)
    for (const key in fields) {
      localStorage.setItem(`artsyTestSignUp${key}`, fields[key])
    }
    document.querySelector('body').innerHTML = `Successfully set your Artsy name to ${fields.firstName} ${fields.lastName} </br> Sign up on Artsy!`
  })
}

window.addEventListener('load', getUserFullName)