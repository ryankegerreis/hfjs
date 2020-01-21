//Bubbles-R-Us
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18,
  41, 53, 55, 61, 51, 44]

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25,
  .25, .25, .27, .25, .26, .29];

let bubbleScores = (scoreArr, bubbleCost) => {
  let highscore = 0;
  let bestSolutions = []
  let lowestCost = 1000;
  for (let j = 0; j < scoreArr.length; j++) {
    if (highscore < scoreArr[j]) {
      highscore = scoreArr[j];

    }
  }

  for (let i = 0; i < scoreArr.length; i++) {
    console.log("Number " + i, scoreArr[i])
    if (scoreArr[i] === highscore) {
      bestSolutions.push(i)
      if (lowestCost > bubbleCost[i]) {
        lowestCost = i;
      }
    }
  }
  console.log("Number of tests", scoreArr.length)
  console.log("High score", highscore)
  console.log("Best Soltuions", bestSolutions)
  console.log("Lowest Cost", lowestCost)
}

bubbleScores(scores, costs)