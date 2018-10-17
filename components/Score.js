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

class _Score extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const correct = this.props.correct
    const incorrect = this.props.incorrect
    return <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.onrow}>
          <Text style={styles.correct}>Correct:</Text>
          <Text style={styles.correct}>{correct}</Text>
        </View>
        <View style={styles.onrow}>
          <Text style={styles.incorrect}>Incorrect:</Text>
          <Text style={styles.incorrect}>{incorrect}</Text>
        </View>
        <View style={styles.buttons}>
          <Button onPress={this.props.reset}
                  title="Reset"
                  accessibilityLabel="Reset"
          />
        </View>
      </ScrollView>
    </View>;
  }

};

function mapStateToProps(state) {
  return {
    correct: state.game.correct,
    incorrect: state.game.incorrect,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    reset: () => {
      dispatch({
        type: 'RESET',
      });
    },
  };
};

const Score = connect(mapStateToProps, mapDispatchToProps)(_Score);

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  onrow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  correct: {
    fontSize: 24,
  },
  incorrect: {
    fontSize: 24,
  },
});
