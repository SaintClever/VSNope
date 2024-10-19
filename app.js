let textarea = document.querySelector("#textarea");
let output = document.querySelector("#output");


let updateOuput = () => {
  // textarea.focus();
  console.log(textarea.value);
  output.innerHTML = textarea.value;
}


textarea.addEventListener('keypress', () => {updateOuput()})
