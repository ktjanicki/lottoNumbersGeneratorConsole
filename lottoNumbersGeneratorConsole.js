const drawsNumber = 1000000;
const resultsNumber = 6; 
const drawResults = new Array;
let count = 0;

const drawNumbers = () => {
  const numbers = new Set();

  while (numbers.size < 6) {
    numbers.add(parseInt(Math.random() * (50 - 1) + 1));
    count++;
  }

  return [...numbers].sort((a, b) => a - b);
};

const finalResult = () => {
  const getStartTime = new Date().getTime();

  const finalResult = drawResults.sort((a, b) => b[1] - a[1]);
  for(let i = 0; i < resultsNumber; i++){
    console.log(`${i + 1}: ${finalResult[i][0].join(', ')}: ${finalResult[i][1]} razy`);
  }
  const getEndTime = new Date().getTime();
  console.log(`finalResult time: ${((getEndTime - getStartTime)/1000).toFixed(5)}\n`)
}

const partialResult = (number, time) => {
  console.log(`Wyniki cząstkowe ${number} losowań. Aktualny czas pętli losowania: ${time}`);
  finalResult();
}

for(let i = 0; i < drawsNumber; i++){
  const getStartTime = new Date().getTime();
  const draw = drawNumbers();
  const matchNumbers = drawResults.filter(el => el.join(',').includes(draw.join(',')));
  matchNumbers.length !== 0 ? matchNumbers.map(el => el[1]++) : drawResults.push([draw, 1]);
  const loopTime = ((new Date().getTime() - getStartTime)/1000).toFixed(5);
  count++;

  switch (i){
    case 1000:
      partialResult(i, loopTime);
      break;
    case 5000:
      partialResult(i, loopTime);
      break;
    case 99000:
      partialResult(i, loopTime);
      break;
    case 199000:
      partialResult(i, loopTime);
      break;
    case 299000:
      partialResult(i, loopTime);
      break;
    case 399000:
      partialResult(i, loopTime);
      break;
    case 499000:
      partialResult(i, loopTime);
      break;
    case 599000:
      partialResult(i, loopTime);
      break;
    case 699000:
      partialResult(i, loopTime);
      break;
    case 799000:
      partialResult(i, loopTime);
      break;
    case 899000:
      partialResult(i, loopTime);
      break;
    case 999000:
      partialResult(i, loopTime);
      break;                                                                                                                                
  }
}

finalResult()
console.log(`total: ${drawResults.length}`);
console.log(`Operations: ${count}`);