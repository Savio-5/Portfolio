const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbyQ-NAk3SXz9VeUyHN-LzN1BCntZ1mOq30ez-R1kdSI577oq3af7x6Iva9Zt0pNjl5p/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response)
      // alert('Message Recived')
      showModal()
      const frm = document.getElementsByName('submit-to-google-sheet')[0];
      frm.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

function showModal() {
  var modal = document.getElementById("defaultModal");
  modal.classList.remove("hidden");
}
