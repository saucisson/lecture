import React from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Styles from "../components/Styles";

class _Game extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let syllable = this.props.syllable;
    if (syllable === null) {
      syllable = ["?", "?"];
    }
    return <View style={Styles.main}>
      <View style={Styles.game}>
        <View style={Styles.space}></View>
        <View style={Styles.syllable}>
          <Text style={Styles.syllableText}>
            {syllable[0]}{syllable[1]}
          </Text>
        </View>
        <View style={Styles.space}></View>
        <View style={Styles.answers}>
          <TouchableNativeFeedback style={Styles.answer}
                  onPress={this.props.incorrect}
                  accessibilityLabel="Incorrect">
            <Text style={Styles.answerText}>👎</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={Styles.answer}
                  onPress={this.props.next}
                  accessibilityLabel="Next">
            <Text style={Styles.answerText}>🤷</Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={Styles.answer}
                  onPress={this.props.correct}
                  accessibilityLabel="Correct">
            <Text style={Styles.answerText}>👍</Text>
          </TouchableNativeFeedback>
        </View>
        <View style={Styles.space}></View>
      </View>
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
    incorrect: () => {
      dispatch({
        type: 'INCORRECT',
      });
    },
    next: () => {
      dispatch({
        type: "NEXT",
      });
    },
    correct: () => {
      dispatch({
        type: 'CORRECT',
      });
    },
  };
};

const Game = connect(mapStateToProps, mapDispatchToProps)(_Game);

export default Game;
