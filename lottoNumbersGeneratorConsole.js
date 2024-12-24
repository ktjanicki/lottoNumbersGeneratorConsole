const lottoDraws = (numberOfDraws = 1000000, numberOfResults = 6) => {
  const drawResults = new Object();
  const everyOneProcent = Array.from({ length: 100 }, (_, i) => Math.floor((i + 1) * 0.01 * numberOfDraws));
  const formatNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const showSimulationProgress = (draw) => {
    console.clear();
    console.log(`\nSymulacja w toku: ${((draw / numberOfDraws) * 100).toFixed()}%`);
  };

  const drawNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 49 + 1));
    }

    return [...numbers].sort((a, b) => a - b).join(", ");
  };

  for (let i = 0; i < numberOfDraws; i++) {
    const draw = drawNumbers();
    drawResults[draw] ? drawResults[draw]++ : (drawResults[draw] = 1);
    if (everyOneProcent.includes(i + 1)) showSimulationProgress(i + 1);
  }

  const sortedNumbers = Object.keys(drawResults).sort((a, b) => drawResults[b] - drawResults[a]);
  console.log(
    `\nWykonano ${formatNumber(numberOfDraws)} losowań w których padło ${formatNumber(
      Object.keys(drawResults).length
    )} unikalnych zestawów liczb.\nNajczęściej padały zestawy liczb:\n`
  );

  sortedNumbers.slice(0, numberOfResults).forEach((numbers, i) => {
    console.log(`${i + 1}: ${numbers}: ${drawResults[numbers]} razy.`);
  });
};

const getArguments = (argsNumber) => {
  const argsIndex = argsNumber - 1;
  const argsValue = process.argv.slice(2);
  if (parseInt(argsValue[argsIndex])) return argsValue[argsIndex];
};

lottoDraws(getArguments(1), getArguments(2));
