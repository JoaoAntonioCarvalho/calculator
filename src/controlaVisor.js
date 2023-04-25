let resultArea = document.getElementById("result");

function zeraVisor() {
  resultArea.value = '0';
};

function existNumber() {
  if (resultArea.value == '0') {
    return false
  };
  return true

};

let numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (existNumber()) {
      //ja existe numero no visor
      resultArea.value = `${resultArea.value}${number.textContent}`;
    } else {
      //o numero no visor é 0
      resultArea.value = number.textContent;
    };
  });
});

let decimal = document.querySelector(".decimal");
decimal.addEventListener('click', () => {
  if ((resultArea.value.toString()).includes('.') == false) {
    resultArea.value = `${resultArea.value}${decimal.textContent}`
  }
});

let clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', () => {
  zeraVisor();
});