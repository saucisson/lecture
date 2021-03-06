import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  space: {
    flex: 1,
  },
  //
  vowels: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  consonants: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
  },
  letters: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  letterGroup: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 60,
  },
  options: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  numberSlider: {
    width: 200,
  },
  numberText: {
  },
  //
  game: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  syllable: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  syllableTextCursive: {
    fontSize: 96,
    fontFamily: 'cursive',
  },
  syllableTextComputer: {
    fontSize: 72,
    fontFamily: 'computer',
  },
  answers: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  answer: {
    flex: 1,
    // alignSelf: 'stretch',
    alignItems: 'center',
  },
  answerText: {
    fontSize: 48,
  },
  //
  scores: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  score: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 48,
  },
  //
  explanations: {
    flex: 1,
    flexDirection: 'column',
  },
  explanation: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  explanationText: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default Styles;
