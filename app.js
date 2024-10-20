let textarea = document.querySelector("#textarea");
let output = document.querySelector("#output");
let snippet = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>`;

// focus
setTimeout(() => {textarea.focus();}, 1000);


// Code snippets
let updateOuput = () => {
  if (textarea.value === "nope:!") {
    textarea.value = snippet;
  }

  if (textarea.value === "nope:css") {
    textarea.value = '<link rel="stylesheet" href="style.css">';
  }

  if (textarea.value === "nope:dead") {
    textarea.value = `
    <h2>Bye Bye Bye Codesandbox and VScode</h2>
    <video controls autoplay width="50%">
    <source src="assets/Deadpool and Wolverine - Bye Bye Bye.mp4" type="video/mp4">
    </video>
    `
  }
  output.innerHTML = textarea.value;
}

// Prevent Default Tab
let preventTab = (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    textarea.value += "   ";
  }
}


let saveFile = () => {

}

textarea.addEventListener("keyup", () => {updateOuput()})
textarea.addEventListener("keydown", (e) => {preventTab(e)});