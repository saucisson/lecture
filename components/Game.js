import React from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import Styles from "../components/Styles";

class _Game extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const fontLoaded = this.props.fontLoaded;
    // FIXME: use fontLoaded
    return <View style={Styles.main}>
      <View style={Styles.game}>
        <View style={Styles.space}></View>
        <View style={Styles.syllable}>
        { this.props.font == 'CURSIVE'
        ? <Text style={Styles.syllableTextCursive}>
            {this.props.syllable}
          </Text>
        : <Text style={Styles.syllableTextComputer}>
            {this.props.syllable}
          </Text>
        }
        </View>
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
    syllable: state.game.syllable ? state.game.syllable : '?',
    font: state.game.font ? state.game.font : 'SCRIPT',
    fontLoaded: state.fontLoaded,
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
