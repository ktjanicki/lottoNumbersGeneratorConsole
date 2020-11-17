const drawsNumber = 10000;
const drawResults = new Array;

const drawNumbers = () => {
  const numbers = new Set();

  while (numbers.size < 6) {
    numbers.add(parseInt(Math.random() * (50 - 1) + 1));
  }

  return [...numbers].sort((a, b) => a - b);
};

for(let i = 0; i < drawsNumber; i++){
  const draw = drawNumbers()
  const matchNumbers = drawResults.filter(el => el.join(',').includes(draw.join(',')))
  matchNumbers.length > 0 ? matchNumbers.map(el => el[1]++) : drawResults.push([draw, 1])

}


const wynik = drawResults.sort((a, b) => b[1] - a[1])

for(let i = 0;i<10;i++){
  console.log(`${i+1}: ${wynik[i][0].join(', ')}: ${wynik[i][1]} razy`)
}