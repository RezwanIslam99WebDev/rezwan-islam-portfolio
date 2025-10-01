function calculate() {
  let num1 = +document.getElementById('num1').value;
  let a = document.getElementById('a').value;
  let operator = document.getElementById('operator').value;
  let num2 = +document.getElementById('num2').value;
  let b = document.getElementById('b').value;

  let a2 = Math.pow(num1, 2);
  let b2 = Math.pow(num2, 2);

  // মধ্যের চিহ্ন ঠিক করা (±)
  let signMid = (operator === "+") ? "+" : "-";
  let signLast = (operator === "+") ? "+" : "+";

  document.getElementById('line1').innerHTML =
    `(${num1}${a}${operator}${num2}${b})²`;

  document.getElementById('line2').innerHTML =
    `(${num1}${a})² ${signMid} 2*${num1}${a}*${num2}${b} ${signLast} (${num2}${b})²`;

  document.getElementById('line3').innerHTML =
    `${a2}${a}² ${signMid} ${2 * num1 * num2}${a}${b} ${signLast} ${b2}${b}²`;
}