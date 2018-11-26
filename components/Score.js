import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { VictoryChart, VictoryTheme, VictoryPie } from "victory-native";
import Styles from "../components/Styles";

class _Score extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const correct = this.props.correct;
    const incorrect = this.props.incorrect;
    const data = [
      { x: 1, y: correct, label: "" + correct + " 👍" },
      { x: 2, y: incorrect, label: "" + incorrect + " 👎" },
    ];
    let pie = undefined
    if (correct != 0 || incorrect != 0) {
      pie = <VictoryPie
        data={data}
        width={400}
        height={400}
        innerRadius={50}
        labelRadius={75}
        style={{ labels: { fill: "black", fontSize: 32, fontWeight: "bold" } }}
        padAngle={3}
        colorScale={["green", "red"]}
      />
    }
    return <View style={Styles.main}>
      <View style={Styles.space}></View>
      <View style={Styles.scores}>
        {pie}
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
