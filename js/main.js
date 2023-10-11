let text = '';

for (let firstNumber = 10; firstNumber <= 20; firstNumber++) {
  if (firstNumber === 20) {
    text += firstNumber;
  } else {
    text += `${firstNumber}, `;
  }
}

document.getElementById('first-demo').innerHTML = text;

let secondText = '';

for (let secondNumber = 10; secondNumber <= 20; secondNumber++) {
  let square = secondNumber ** 2;
  if (secondNumber === 20) {
    secondText += square;
  } else {
    secondText += `${square}, `;
  }
}

document.getElementById('second-demo').innerHTML = secondText;

let thirdText = '';

for (let thirdNumber = 1; thirdNumber <= 10; thirdNumber++) {
  let multSeven = thirdNumber * 7;
  thirdText += `${thirdNumber} x 7 = ${multSeven} <br>`
}

document.getElementById('third-demo').innerHTML = thirdText;

let fourthText = '';
let sum = 0;

for (let fourthNumber = 1; fourthNumber <= 15; fourthNumber++) {
  sum += fourthNumber;
  if (fourthNumber === 15) {
    fourthText += sum;
  } else {
    fourthText += `${sum}, `;
  }
}

document.getElementById('fourth-demo').innerHTML = fourthText;

let fifthText = '';
let multAmount = 15n;

for (fifthNumber = 15; fifthNumber <= 35; fifthNumber++) {
  multAmount *= BigInt(fifthNumber);
  fifthText += `${multAmount} <br>`;
}

document.getElementById('fifth-demo').innerHTML = fifthText;

let sixthText = '';
let averageSum = 0;
const averageNumber = 500;

for (let sixthNumber = 1; sixthNumber <= averageNumber; sixthNumber++) {
  averageSum += sixthNumber;
}

const average = averageSum / averageNumber;
sixthText = average;

document.getElementById('sixth-demo').innerHTML = sixthText;

let seventhText = '';
let sumOfEven = 0;

for (let seventhNumber = 30; seventhNumber <= 80; seventhNumber++) {
  if (seventhNumber % 2 !== 0) {
    continue;
  } else {
    sumOfEven += seventhNumber;
  }
  seventhText += `${sumOfEven} `;
  if (seventhNumber < 80) {
    seventhText += ', ';
  }
}

document.getElementById('seventh-demo').innerHTML = seventhText;

let eighthText = '';

for (let eighthNumber = 100; eighthNumber <= 200; eighthNumber++) {
  if (eighthNumber % 3 === 0) {
    eighthText += `${eighthNumber}, `;
  }
}

document.getElementById('eighth-demo').innerHTML = eighthText;

let ninthText = '';
let tenthText = '';
let eleventhText = '';
let randomNumber;
let evenDivCount = 0;
let sumEvenDivCount = 0;

document.getElementById('button-demo').onclick = function () {
  ninthText = '';
  randomNumber = parseInt(document.getElementById('input-demo').value);

  if (isNaN(randomNumber)) {
    document.getElementById('ninth-demo').innerHTML = 'Please,  write a number.';
    return;
  }

  for (let ninthNumber = 1; ninthNumber <= randomNumber; ninthNumber++) {
    if (randomNumber % ninthNumber === 0) {
      ninthText += `${ninthNumber}, `;
      if (ninthNumber % 2 === 0) {
        evenDivCount++;
        sumEvenDivCount += ninthNumber;
      }
      tenthText = evenDivCount;
      eleventhText = sumEvenDivCount;
    }
  }

  ninthText = ninthText.slice(0, -2);

  document.getElementById('ninth-demo').innerHTML = ninthText;
  document.getElementById('tenth-demo').innerHTML = tenthText;
  document.getElementById('eleventh-demo').innerHTML = eleventhText;
}

let twelfthText = '<table border="1">';

for (let twelfthNumber = 1; twelfthNumber <= 10; twelfthNumber++) {
  twelfthText += '<tr>';

  for (let multiplyNumber = 1; multiplyNumber <=10; multiplyNumber++) {
    twelfthText += `<td>${twelfthNumber} x ${multiplyNumber} = ${twelfthNumber*multiplyNumber}</td>`;
  }
  twelfthText += '</tr>';
}

document.getElementById('twelfth-demo').innerHTML = twelfthText;