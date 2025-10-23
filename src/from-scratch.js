/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  // Your code here

  if (petBreed === undefined || petName === undefined) {
    console.log('Missing information. Please provide a valid pet.')
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`)
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`)
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`)
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`)
  } else {
    console.log(`What an...interesting pet.`)
  }
};


// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  // Your code here
  const numbers = []
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i)
  }

};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // Your code here
  strChar = ''
  for (let i = 0; i < str.length; i++) {
    console.log(str[i].toUpperCase() + '!')
  }
  return strChar
};
shoutEveryLetterForLoop('hey');
shoutEveryLetterForLoop('');
// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Your code here
  freaky = {}

  let lowercase = 0
  let uppercase = 0
  for (let i = 0; i < str.length; i++) {
    if (freaky[str[i]] === str.toLowerCase()) {

    } else {
      freaky[str[i]] = 1
    }
  }
  console.log(freaky)
};
letterCaseCounts('abCdef 123');
// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  // Your code here
  const gardenGnomes = {
    gnome1: {
      name: 'Larililarila',
      gardenCount: 2,
      age: 407,
      stolenDecorations: ['chair', 'water fountain'],
    },
    gnome2: {
      name: 'Tungsahoor',
      gardenCount: 2,
      age: 407,
      stolenDecorations: ['toilet',],
    }

  }

};


// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
