let textarea = document.querySelector("#textarea");
let output = document.querySelector("#output");
let snippet = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
</body>
</html>`


// focus
setTimeout(() => {textarea.focus();}, 1000);


// Code snippets
let updateOuput = () => {
  if (textarea.value === "!!!") {
    textarea.value = snippet;
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


textarea.addEventListener("keyup", () => {updateOuput()})
textarea.addEventListener("keydown", (e) => {preventTab(e)});