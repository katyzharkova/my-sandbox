const editor = document.getElementById("editor");
const output = document.getElementById("output");
const lineNumbers = document.getElementById("lineNumbers");

let timer;

function printToOutput(text, isError = false) {
  output.innerHTML = "";

  const line = document.createElement("div");
  line.textContent = text;

  if (isError) {
    line.classList.add("error");
  }

  output.appendChild(line);
}

function updateLineNumbers() {
  const lines = editor.value.split("\n").length || 1;
  lineNumbers.innerHTML = "";

  for (let i = 1; i <= lines; i++) {
    const line = document.createElement("div");
    line.textContent = i;
    line.style.background = i % 2 === 0 ? "#f3f3f3" : "#e7e7e7";
    lineNumbers.appendChild(line);
  }
}

function runCode() {
  const code = editor.value;
  output.innerHTML = "";

  const customConsole = {
    log: function (...args) {
      const text = args.map(item => String(item)).join(" ");
      const line = document.createElement("div");
      line.textContent = text;
      output.appendChild(line);
    }
  };

  try {
    new Function("console", code)(customConsole);

    if (output.textContent.trim() === "") {
      printToOutput("No output");
    }
  } catch (error) {
    printToOutput("Error: " + error.message, true);
  }
}

editor.addEventListener("input", function () {
  updateLineNumbers();

  clearTimeout(timer);
  timer = setTimeout(runCode, 400);
});

editor.addEventListener("scroll", () => {
  lineNumbers.scrollTop = editor.scrollTop;
});

updateLineNumbers();
runCode();
