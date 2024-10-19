let textarea = document.querySelector("#textarea");
let output = document.querySelector("#output");
// textarea.focus();

textarea.addEventListener('keypress', () => {
  console.log(textarea.value);
  output.innerHTML = textarea.value;
})
