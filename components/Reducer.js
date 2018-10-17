import { combineReducers } from 'redux';

const initialLetters = {
  vowels: {
    'a': false,
    'e': false,
    'i': false,
    'o': false,
    'u': false,
    'y': false,
    'é': false,
    'è': false,
    'ê': false,
    'à': false,
    'â': false,
    'î': false,
  },
  consonants: {
    'b': false,
    'c': false,
    'd': false,
    'f': false,
    'g': false,
    'h': false,
    'j': false,
    'k': false,
    'l': false,
    'm': false,
    'n': false,
    'p': false,
    'q': false,
    'r': false,
    's': false,
    't': false,
    'v': false,
    'w': false,
    'x': false,
    'z': false,
  },
};

const orders = [
  'VOWEL_FIRST',
  'CONSONANT_FIRST',
];

const initialGame = {
  correct: 0,
  incorrect: 0,
  syllable: undefined,
};

function any(x) {
  return x[Math.floor(Math.random() * x.length)];
}

function generateSyllable(state) {
  const order = any(orders);
  const vowels = Object.entries(state.letters.vowels).filter(([letter, selected]) => {
    return selected;
  }).map(([letter, selected]) => {
    return letter;
  });
  const consonants = Object.entries(state.letters.consonants).filter(([letter, selected]) => {
    return selected;
  }).map(([letter, selected]) => {
    return letter;
  });
  const vowel = any(vowels);
  const consonant = any(consonants);
  if (typeof vowel === 'undefined' || typeof consonant === 'undefined') {
    return undefined;
  }
  switch (order) {
    case 'VOWEL_FIRST':
       return vowel + consonant;
    case 'CONSONANT_FIRST':
      return consonant + vowel;
  }
}

function update(state, action) {
  if (typeof state === 'undefined') {
    const result = {
      letters: initialLetters,
      game: initialGame,
    };
    result.game.syllable = generateSyllable(result);
    return result;
  }
  let result = {...state};
  switch (action.type) {
    case 'TOGGLE_LETTER':
      if (action.letter in result.letters.vowels) {
        result.letters.vowels[action.letter] = !state.letters.vowels[action.letter];
      }
      if (action.letter in result.letters.consonants) {
        result.letters.consonants[action.letter] = !state.letters.consonants[action.letter];
      }
      result.game.syllable = generateSyllable(result);
      return result;
    case 'CORRECT':
      result.game.correct += 1;
      result.game.syllable = generateSyllable(result);
      return result;
    case 'INCORRECT':
      result.game.incorrect += 1;
      result.game.syllable = generateSyllable(result);
      return result;
    case 'RESET':
      result.game.correct = 0;
      result.game.incorrect = 0;
      return result;
    default:
      return state;
  }
};

export default update;
