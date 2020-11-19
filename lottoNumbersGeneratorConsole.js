const drawsNumber = 100000;
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

for(let i = 0; i < drawsNumber; i++){
  const getStartTime = new Date().getTime();
  const draw = drawNumbers();
  const matchNumbers = drawResults.filter(el => el.join(',').includes(draw.join(',')));
  matchNumbers.length !== 0 ? matchNumbers.map(el => el[1]++) : drawResults.push([draw, 1]);
  const getEndTime = new Date().getTime();
  count++;
  if(i === 10000) console.log('10 000 : ' + ((getEndTime - getStartTime)/1000).toFixed(5));
  if(i === 50000) console.log('50 000 : ' + ((getEndTime - getStartTime)/1000).toFixed(5));
  if(i === 99000) console.log('99 000 : ' + ((getEndTime - getStartTime)/1000).toFixed(5));

}
const finalResult = () => {
  const getStartTime = new Date().getTime();

  const finalResult = drawResults.sort((a, b) => b[1] - a[1]);
  for(let i = 0; i < resultsNumber; i++){
    console.log(`${i + 1}: ${finalResult[i][0].join(', ')}: ${finalResult[i][1]} razy`);
  }
  const getEndTime = new Date().getTime();
console.log(`finalResult time: ${((getEndTime - getStartTime)/1000).toFixed(5)}`)
}

finalResult()
console.log(`total: ${drawResults.length}`);
console.log(`Operations: ${count}`);

// console.log(drawResults)