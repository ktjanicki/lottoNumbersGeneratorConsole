const drawsNumber = 1000000;
const resultNumber = 12;
const showPartialDrawsList = [50000, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 990000]; 
const drawResults = new Array;

const drawNumbers = () => {
  const numbers = new Set();

  while (numbers.size < 6) {
    numbers.add(parseInt(Math.random() * (50 - 1) + 1));
  }

  return [...numbers].sort((a, b) => a - b);
};

const finalResult = () => {
  const finalResult = drawResults.sort((a, b) => b[1] - a[1]);
  
  for(let i = 0; i < resultNumber; i++) {
    console.log(`${i + 1}: ${finalResult[i][0].join(', ')}: ${finalResult[i][1]} razy`);
  }
}

const partialResult = (number, time) => {
  console.log(`\nWyniki cząstkowe dla ${number} losowań. Aktualny czas pętli losowania: ${time}`);
  finalResult();
}

for(let i = 0; i < drawsNumber; i++) {
  const getStartTime = new Date().getTime();
  const draw = drawNumbers();
  const matchNumbers = drawResults.filter(el => el.join(',').includes(draw.join(',')));
  matchNumbers.length !== 0 ? matchNumbers.map(el => el[1]++) : drawResults.push([draw, 1]);
  const loopTime = ((new Date().getTime() - getStartTime)/1000).toFixed(5);

  if (showPartialDrawsList.includes(i)) partialResult(i, loopTime);
}

console.log(`\nWynik końcowy po ${drawsNumber} losowań.`);
finalResult();
console.log(`W sumie padło ${drawResults.length} kombinacji liczb w ${drawsNumber} losowań.`);