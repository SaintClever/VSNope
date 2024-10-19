let textarea = document.querySelector("#textarea");
let output = document.querySelector("#output");


// textarea.focus();


let updateOuput = () => {
  console.log(textarea.value);
  output.innerHTML = textarea.value;
}

textarea.addEventListener('keypress', () => {updateOuput()})