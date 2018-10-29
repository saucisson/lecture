import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Styles from "../components/Styles";

class _Score extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const correct = this.props.correct
    const incorrect = this.props.incorrect
    return <View style={Styles.main}>
      <View style={Styles.space}></View>
      <View style={Styles.scores}>
        <View style={Styles.score}>
          <Text style={Styles.scoreText}>{correct} 👍</Text>
        </View>
        <View style={Styles.score}>
          <Text style={Styles.scoreText}>{incorrect} 👎</Text>
        </View>
      </View>
      <View style={Styles.space}></View>
      <View>
        <Button onPress={this.props.reset}
                title="Remettre à zéro"
                accessibilityLabel="Reset"
        />
      </View>
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
