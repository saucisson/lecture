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

class _Game extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let syllable = this.props.syllable;
    if (syllable === null) {
      syllable = "?";
    }
    return <View style={styles.container}>
      <ScrollView>
        <View style={styles.syllable}>
          <Text style={styles.syllableText}>{syllable}</Text>
        </View>
        <View style={styles.buttons}>
          <Button style={styles.incorrect}
                  onPress={this.props.incorrect}
                  title="Incorrect"
                  accessibilityLabel="Incorrect"
          />
          <Button style={styles.correct}
                  onPress={this.props.correct}
                  title="Correct"
                  accessibilityLabel="Correct"
          />
        </View>
      </ScrollView>
    </View>;
  }

};

function mapStateToProps(state) {
  return {
    syllable: state.game.syllable,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    correct: () => {
      dispatch({
        type: 'CORRECT',
      });
    },
    incorrect: () => {
      dispatch({
        type: 'INCORRECT',
      });
    },
  };
};

const Game = connect(mapStateToProps, mapDispatchToProps)(_Game);

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  correct: {
    color: '#f00',
  },
  incorrect: {
    color: '#0f0',
  },
  syllable: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  syllableText: {
    fontSize: 48,
  },
});
