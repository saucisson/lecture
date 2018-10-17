import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

class _LetterSelection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const letter = this.props.letter;
    const selected = this.props.selected;
    return <View style={{ width: 50 }}>
      <View style={styles.letterGroup}>
        <Text style={styles.letter}>{letter}</Text>
        <Switch value={selected}
                style={styles.letter}
                onValueChange={this.props.toggleLetter(letter)}/>
      </View>
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
    return <View style={styles.container}>
      <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header}>Voyelles</Text>
      </View>
      <View style={styles.letters}>
        {vowels}
      </View>
      <View style={styles.header}>
        <Text style={styles.header}>Consonnes</Text>
      </View>
      <View style={styles.letters}>
        {consonants}
      </View>
      </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  letters: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  letter: {
  },
  letterGroup: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
