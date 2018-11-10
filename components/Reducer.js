import { combineReducers } from 'redux';
import Data from '../components/Data';

const initialState = {
  letters: Data,
  options: {
    useVowelFirst: false,
    useConsonantFirst: true,
    useScript: true,
    useUpperCaseScript: true,
    useCursive: false,
    useUpperCaseCursive: false,
    numberOfSyllables: 1,
  },
  game: {
    correct: 0,
    incorrect: 0,
    syllable: undefined,
    font: undefined,
  },
};

export { initialState };

function any(x) {
  return x[Math.floor(Math.random() * x.length)];
}

function upperCase(word) {
  return word[0].toUpperCase() + word.substring(1);
}

function generateSyllable(state) {
  // Select font:
  let fonts = [];
  if (state.options.useScript) {
      fonts.push('SCRIPT');
  }
  if (state.options.useCursive) {
      fonts.push('CURSIVE');
  }
  const font = any(fonts);
  if (typeof font === 'undefined') {
    return undefined;
  }
  let word = "";
  var i;
  for (i = 0; i < state.options.numberOfSyllables; i++) {
    // Select letters order:
    let orders = [];
    if (state.options.useVowelFirst) {
      orders.push('VOWEL_FIRST');
    }
    if (state.options.useConsonantFirst) {
      orders.push('CONSONANT_FIRST');
    }
    const order = any(orders);
    if (typeof order === 'undefined') {
      return undefined;
    }
    // Select vowel and consonant:
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
    // Build the syllable:
    switch (order) {
      case 'VOWEL_FIRST':
        word = word + vowel + consonant;
        break;
      case 'CONSONANT_FIRST':
        word = word + consonant + vowel;
        break;
    }
    // FIXME
    // if (i < state.options.numberOfSyllables-1) {
    //   word = word + " ";
    // }
  }
  // Capitalize the first letter:
  const capital = any([false, true]);
  switch (font) {
    case 'SCRIPT':
      if (capital && state.options.useUpperCaseScript) {
        word = upperCase(word);
      }
      break;
    case 'CURSIVE':
      if (capital && state.options.useUpperCaseCursive) {
        word = upperCase(word);
      }
      break;
  }
  // Update the syllable:
  state.game.syllable = word;
  state.game.font = font;
}

function update(state, action) {
  if (typeof state === 'undefined') {
    const result = initialState;
    generateSyllable(result);
    return result;
  }
  let result = {...state};
  switch (action.type) {
    case 'TOGGLE_LETTER':
      result.letters = {...result.letters};
      if (action.letter in Data.vowels) {
        result.letters.vowels = {...result.letters.vowels};
        result.letters.vowels[action.letter] = !state.letters.vowels[action.letter];
      }
      if (action.letter in Data.consonants) {
        result.letters.consonants = {...result.letters.consonants};
        result.letters.consonants[action.letter] = !state.letters.consonants[action.letter];
      }
      generateSyllable(result);
      return result;
    case 'TOGGLE_CONSONANT_FIRST':
      result.options = {...result.options};
      result.options.useConsonantFirst = !state.options.useConsonantFirst;
      generateSyllable(result);
      return result;
    case 'TOGGLE_VOWEL_FIRST':
      result.options = {...result.options};
      result.options.useVowelFirst = !state.options.useVowelFirst;
      generateSyllable(result);
      return result;
    case 'TOGGLE_CURSIVE':
      result.options = {...result.options};
      result.options.useCursive = !state.options.useCursive;
      generateSyllable(result);
      return result;
    case 'TOGGLE_UPPERCASE_CURSIVE':
      result.options = {...result.options};
      result.options.useUpperCaseCursive = !state.options.useUpperCaseCursive;
      generateSyllable(result);
      return result;
    case 'TOGGLE_SCRIPT':
      result.options = {...result.options};
      result.options.useScript = !state.options.useScript;
      generateSyllable(result);
      return result;
    case 'TOGGLE_UPPERCASE_SCRIPT':
      result.options = {...result.options};
      result.options.useUpperCaseScript = !state.options.useUpperCaseScript;
      generateSyllable(result);
      return result;
    case 'UPDATE_NUMBER_OF_SYLLABLES':
      result.options = {...result.options};
      result.options.numberOfSyllables = action.value;
      generateSyllable(result);
      return result;
    case 'CORRECT':
      result.game = {...result.game};
      result.game.correct += 1;
      generateSyllable(result);
      return result;
    case 'INCORRECT':
      result.game = {...result.game};
      result.game.incorrect += 1;
      generateSyllable(result);
      return result;
    case 'NEXT':
      result.game = {...result.game};
      generateSyllable(result);
      return result;
    case 'RESET':
      result.game = {...result.game};
      result.game.correct = 0;
      result.game.incorrect = 0;
      generateSyllable(result);
      return result;
    default:
      return state;
  }
};

export default update;
