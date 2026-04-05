const codeInput = document.getElementById("code");
const output = document.getElementById("output");

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

function runCode() {
  const code = codeInput.value;
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

codeInput.addEventListener("input", function () {
  clearTimeout(timer);
  timer = setTimeout(runCode, 400);
});
const lineNumbers = document.getElementById("lineNumbers");

function updateLineNumbers() {
  const lines = editor.value.split("\n").length;
  lineNumbers.innerHTML = "";

  for (let i = 1; i <= lines; i++) {
    const line = document.createElement("div");
    line.textContent = i;
    line.style.background = i % 2 === 0 ? "#f3f3f3" : "#e7e7e7";
    lineNumbers.appendChild(line);
  }
}

editor.addEventListener("input", updateLineNumbers);

editor.addEventListener("scroll", () => {
  lineNumbers.scrollTop = editor.scrollTop;
});

updateLineNumbers();

runCode();
