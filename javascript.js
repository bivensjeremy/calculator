function add() {
  let sum = a + b;
  console.log(sum);
  document.querySelector("#inputfield").value = sum;
}
function subtract() {
  let product = a - b;
  console.log(product);
  document.querySelector("#inputfield").value = product;
}
function multiply() {
  let multiplier = a * b;
  console.log(multiplier);
  document.querySelector("#inputfield").value = multiplier;
}

function divide() {
  let divider = a / b;
  if (b === 0) {
    divider = "oh naw boss";
  }
  console.log(divider);
  document.querySelector("#inputfield").value = divider;
}

function operate(a, b) {
  if (operator == "+") {
    add(a, b);
  } else if (operator == "-") {
    subtract(a, b);
  } else if (operator == "*") {
    multiply(a, b);
  } else if (operator == "/") {
    divide(a, b);
  }
}

document.querySelector(".add").addEventListener("click", function () {
  a = parseFloat(document.querySelector("#inputfield").value);
  operator = "+";
  document.querySelector("#inputfield").value = "";
  console.log(operator);
  console.log(a);
});

document.querySelector(".subtract").addEventListener("click", function () {
  a = parseFloat(document.querySelector("#inputfield").value);
  document.querySelector("#inputfield").value = "";
  operator = "-";
  console.log(operator);
});

document.querySelector(".multiply").addEventListener("click", function () {
  a = parseFloat(document.querySelector("#inputfield").value);
  operator = "*";
  document.querySelector("#inputfield").value = "";
  console.log(operator);
});

document.querySelector(".divide").addEventListener("click", function () {
  a = parseFloat(document.querySelector("#inputfield").value);
  operator = "/";
  document.querySelector("#inputfield").value = "";
  console.log(operator);
});

document.querySelector("#equals").addEventListener("click", function () {
  b = parseFloat(document.querySelector("#inputfield").value);
  operate(a, b) = result;
  console.log(result);
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  document.querySelector("#inputfield").value = "";
  document.querySelector(".decimal").disabled = false;
  console.clear();
  a = null;
  b = null;
  operator = null;
});

const num1 = document.querySelector(".num1");
num1.addEventListener("click", function () {
  const num1 = 1;
  document.querySelector("#inputfield").value += num1;
});

const num2 = document.querySelector(".num2");
num2.addEventListener("click", function () {
  const num2 = 2;
  document.querySelector("#inputfield").value += num2;
});

const num3 = document.querySelector(".num3");
num3.addEventListener("click", function () {
  const num3 = 3;
  document.querySelector("#inputfield").value += num3;
});

const num4 = document.querySelector(".num4");
num4.addEventListener("click", function () {
  const num4 = 4;
  document.querySelector("#inputfield").value += num4;
});

const num5 = document.querySelector(".num5");
num5.addEventListener("click", function () {
  const num5 = 5;
  document.querySelector("#inputfield").value += num5;
});

const num6 = document.querySelector(".num6");
num6.addEventListener("click", function () {
  const num6 = 6;
  document.querySelector("#inputfield").value += num6;
});

const num7 = document.querySelector(".num7");
num7.addEventListener("click", function () {
  const num7 = 7;
  document.querySelector("#inputfield").value += num7;
});

const num8 = document.querySelector(".num8");
num8.addEventListener("click", function () {
  const num8 = 8;
  document.querySelector("#inputfield").value += num8;
});

const num9 = document.querySelector(".num9");
num9.addEventListener("click", function () {
  const num9 = 9;
  document.querySelector("#inputfield").value += num9;
});

const num0 = document.querySelector(".num0");
num0.addEventListener("click", function () {
  const num0 = 0;
  document.querySelector("#inputfield").value += num0;
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", function () {
  const decimal = ".";
  document.querySelector("#inputfield").value += decimal;
  document.querySelector(".decimal").disabled = true;
});

