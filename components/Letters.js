import React from 'react';
import {
  Switch,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Styles from "../components/Styles";

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
    const vowels = this.props.vowels.map((x) => {
      return <LetterSelection key={x.letter} {...x}/>;
    })
    const consonants = this.props.consonants.map((x) => {
      return <LetterSelection key={x.letter} {...x}/>;
    })
    return <View style={Styles.main}>
      <View style={Styles.lettersGroup}>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>Voyelles</Text>
        </View>
        <View style={Styles.letters}>
          {vowels}
        </View>
      </View>
      <View style={Styles.lettersGroup}>
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
  let vowels = Object.entries(state.letters.vowels).map(([letter, selected]) => {
    return {
      letter: letter,
      selected: selected,
    };
  });
  let consonants = Object.entries(state.letters.consonants).map(([letter, selected]) => {
    return {
      letter: letter,
      selected: selected,
    };
  });
  return {
    vowels: vowels.sort((lhs, rhs) => {
      return lhs.letter - rhs.letter;
    }),
    consonants: consonants.sort((lhs, rhs) => {
      return lhs.letter - rhs.letter;
    }),
  };
};

function mapDispatchToProps(dispatch) {
  return {};
};

const Letters = connect(mapStateToProps, mapDispatchToProps)(_Letters);

export default Letters;
