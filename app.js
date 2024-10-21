let container = document.getElementById("container");
let textarea = document.querySelector("#textarea");
let output = document.querySelector("#output");

let snippets = {
"nope:css": '<link rel="stylesheet" href="style.css">',

"nope:red": `<h2>Bye Bye Bye <s style="color: red;">Codesandbox</s> and <s style="color: red;">VSCode</s></h2>

<video controls autoplay width="45%">
  <source src="assets/Deadpool and Wolverine - Bye Bye Bye.mp4" type="video/mp4">
</video>`,

"nope:!":`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

</body>
</html>`,

"nope:li": `Experienced Full-Stack Developer specializing in Python and JavaScript with a strong background in automation, web development, and data analysis. Eager to leverage my technical expertise to contribute to innovative software development projects.

自動化、Web 開発、データ分析の強力な背景を持つ、Python と JavaScript を専門とする経験豊富なフルスタック開発者。私の技術的専門知識を活用して、革新的なソフトウェア開発プロジェクトに貢献したいと考えています。`
};


// focus
setTimeout(() => {textarea.focus();}, 1000);


// Orientation
let position = () => {
  container.removeChild(textarea);
  textarea.setAttribute("name", "textarea");
  textarea.setAttribute("id", "textarea");
  textarea.setAttribute("placeholder", "🫵 <h1>VSNode: your code goes here</h1> 👈");
}

let positionRight = () => {
    position();
    container.append(textarea);
    textarea.focus();
  }
  
let positionLeft = () => {
    position();
    container.prepend(textarea);
    textarea.focus();
}


// Get code snippets
let codeSnippets = () => {
  let textareaSplit = textarea.value.split('\n')

  for (i in textareaSplit) {
    if (textareaSplit[i] === "nope:!") {
      textarea.value = textarea.value.replaceAll(textareaSplit[i], snippets["nope:!"]);
    }

    if (textareaSplit[i] === "nope:css") {
      textarea.value = textarea.value.replaceAll(textareaSplit[i], snippets["nope:css"]);
    }

    if (textareaSplit[i] === "nope:red") {
      textarea.value = textarea.value.replaceAll(textareaSplit[i], snippets["nope:red"]);
    }

    if (textareaSplit[i] === "nope:li") {
      textarea.value = textarea.value.replaceAll(textareaSplit[i], snippets["nope:li"]);
    }

    if (textareaSplit[i] === "nope:right") {
      positionRight();
    }

    if (textareaSplit[i] === "nope:left") {
      positionLeft();
    }
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


// Themestyles
let themeStyles = (textColor, bg, bgSize, bgColor, bgBlendMode, textareaValue) => {
  textarea.style.color = textColor;
  textarea.style.background = bg;
  textarea.style.backgroundSize = bgSize;
  textarea.style.backgroundColor = bgColor;
  textarea.style.backgroundBlendMode = bgBlendMode;
  textarea.value = textareaValue;
}


// Themes
// NOTE: Error in values, because it clears user input
let themes = () => {
  if (textarea.value === "nope:theme") {

    let theme = prompt(`
      Available Themes:
      - perscholas
      - manara
      - matrix
      - tishana
    `)

    if (theme.toLowerCase() === "perscholas") {
      themeStyles("orange", "url('assets/perscholas.png') no-repeat center", "cover", "rgba(0, 0, 0, 1)", "ligthen", '');
    }

    if (theme.toLowerCase() === "manara") {
      themeStyles("blue", "url('assets/manara.png') no-repeat center", "cover", "rgba(255, 255, 255, 0.5)", "ligthen", '');
    }

    if (theme.toLowerCase() === "matrix") {
      themeStyles("greenyellow", "url('assets/matrix.gif') no-repeat center", "cover", "rgba(255, 255, 255, 1)", "ligthen", '');
    }

    if (theme.toLowerCase() === "tishana") {
      themeStyles("hotpink", "url('assets/jigglypuff.gif') no-repeat center", "cover", "rgba(255, 255, 255, 0.5)", "ligthen", '');
    }
  }
}


// Save File
let saveFile = () => {
  if (textarea.value === "nope:save") {
    window.open("https://www.youtube.com/watch?v=bFEoMO0pc7k&ab_channel=TheParodyFactory");
    textarea.value = '';
  }
}


// Event Listeners
textarea.addEventListener("keyup", () => {
  codeSnippets(), themes(), saveFile()
});

textarea.addEventListener("keydown", (e) => {preventTab(e)});