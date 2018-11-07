import { combineReducers } from 'redux';
import Data from '../components/Data';

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

function upperCase(word) {
  return word[0].toUpperCase() + word.substring(1);
}

function generateSyllable(state) {
  const font = any(['computer', 'cursive']);
  const capital = any([false, true]);
  const order = state.letters.useVowelFirst ? any(orders) : 'CONSONANT_FIRST';
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
  let word = undefined;
  switch (order) {
    case 'VOWEL_FIRST':
      word = vowel + consonant;
       return {
         syllable: (state.letters.useUpperCase && capital ? upperCase(word) : word),
         font: state.letters.useCursive && font ? font : 'computer',
       };
    case 'CONSONANT_FIRST':
      word = consonant + vowel;
      return {
        syllable: (state.letters.useUpperCase && capital ? upperCase(word) : word),
        font: state.letters.useCursive && font ? font : 'computer',
      };
  }
}

function update(state, action) {
  if (typeof state === 'undefined') {
    const result = {
      letters: Data,
      game: initialGame,
    };
    result.game.data = generateSyllable(result);
    return result;
  }
  let result = {...state};
  switch (action.type) {
    case 'TOGGLE_LETTER':
      if (action.letter in Data.vowels) {
        result.letters.vowels[action.letter] = !state.letters.vowels[action.letter];
      }
      if (action.letter in Data.consonants) {
        result.letters.consonants[action.letter] = !state.letters.consonants[action.letter];
      }
      result.game.data = generateSyllable(result);
      return result;
    case 'TOGGLE_VOWEL_FIRST':
      result.letters.useVowelFirst = !state.letters.useVowelFirst;
      return result;
    case 'TOGGLE_CURSIVE':
      result.letters.useCursive = !state.letters.useCursive;
      return result;
    case 'TOGGLE_UPPER_CASE':
      result.letters.useUpperCase = !state.letters.useUpperCase;
      return result;
    case 'CORRECT':
      result.game.correct += 1;
      result.game.data = generateSyllable(result);
      return result;
    case 'INCORRECT':
      result.game.incorrect += 1;
      result.game.data = generateSyllable(result);
      return result;
    case 'NEXT':
      result.game.data = generateSyllable(result);
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
