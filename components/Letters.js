import React from 'react';
import {
  Switch,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Styles from '../components/Styles';
import Data from '../components/Data';

class _LetterSelection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const letter = this.props.letter;
    const selected = this.props.selected;
    return <View style={Styles.letterGroup}>
      <Text>{letter}</Text>
      <Switch value={selected}
              onValueChange={this.props.toggleLetter(letter)}/>
    </View>;
  }

};

const LetterSelection = connect((state) => {
  return state;
}, (dispatch) => {
  return {
    toggleLetter: (letter) => () => {
      dispatch({
        type: 'TOGGLE_LETTER',
        letter: letter,
      })
    },
  };
})(_LetterSelection);

class _Letters extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const orderedVowels = Object.entries(Data.vowels).map(([letter, selected]) => {
      return letter;
    }).sort((lhs, rhs) => {
      return lhs - rhs;
    });
    const orderedConsonants = Object.entries(Data.consonants).map(([letter, selected]) => {
      return letter;
    }).sort((lhs, rhs) => {
      return lhs - rhs;
    });
    const vowels = orderedVowels.map((letter) => {
      const subdata = {
        letter: letter,
        selected: this.props.vowels[letter],
      };
      return <LetterSelection key={letter} {...subdata}/>;
    });
    const consonants = orderedConsonants.map((letter) => {
      const subdata = {
        letter: letter,
        selected: this.props.consonants[letter],
      };
      return <LetterSelection key={letter} {...subdata}/>;
    });
    return <View style={Styles.main}>
      <View style={Styles.vowels}>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>Voyelles</Text>
        </View>
        <View style={Styles.letters}>
          {vowels}
        </View>
      </View>
      <View style={Styles.consonants}>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>Consonnes</Text>
        </View>
        <View style={Styles.letters}>
          {consonants}
        </View>
      </View>
    </View>;
  }

};

function mapStateToProps(state) {
  return {
    vowels: {...state.letters.vowels},
    consonants: {...state.letters.consonants},
  };
};

function mapDispatchToProps(dispatch) {
  return {};
};

const Letters = connect(mapStateToProps, mapDispatchToProps)(_Letters);

export default Letters;
