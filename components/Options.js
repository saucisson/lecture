import React from 'react';
import {
  Slider,
  Switch,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Styles from '../components/Styles';

class _Options extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <View style={Styles.main}>
      <View style={Styles.options}>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>Ordre des lettres</Text>
        </View>
        <View style={Styles.option}>
          <Text>Mettre une voyelle en premier</Text>
          <Switch value={this.props.useVowelFirst}
                  onValueChange={this.props.toggleVowelFirst}/>
        </View>
        <View style={Styles.option}>
          <Text>Mettre une consonne en premier</Text>
          <Switch value={this.props.useConsonantFirst}
                  onValueChange={this.props.toggleConsonantFirst}/>
        </View>
        <View style={Styles.option}>
          <Text>Mettre une voyelle entre deux consonnes</Text>
          <Switch value={this.props.useVowelSandwich}
                  onValueChange={this.props.toggleVowelSandwich}/>
        </View>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>Police script</Text>
        </View>
        <View style={Styles.option}>
          <Text>Utiliser une police script</Text>
          <Switch value={this.props.useScript}
                  onValueChange={this.props.toggleScript}/>
        </View>
        <View style={Styles.option}>
          <Text>Utiliser des majuscules</Text>
          <Switch value={this.props.useUpperCaseScript}
                  onValueChange={this.props.toggleUpperCaseScript}/>
        </View>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>Police cursive</Text>
        </View>
        <View style={Styles.option}>
          <Text>Utiliser une police cursive</Text>
          <Switch value={this.props.useCursive}
                  onValueChange={this.props.toggleCursive}/>
        </View>
        <View style={Styles.option}>
          <Text>Utiliser des majuscules</Text>
          <Switch value={this.props.useUpperCaseCursive}
                  onValueChange={this.props.toggleUpperCaseCursive}/>
        </View>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>Nombre de syllabes</Text>
        </View>
        <View style={Styles.option}>
          <Slider style={Styles.numberSlider}
                  value={this.props.numberOfSyllables}
                  minimumValue={1}
                  maximumValue={3}
                  step={1}
                  onValueChange={this.props.updateNumberOfSyllables}
                  onSlidingComplete={this.props.updateNumberOfSyllables}/>
          <Text style={Styles.numberText}>{this.props.numberOfSyllables}</Text>
        </View>
      </View>
    </View>;
  }

};

function mapStateToProps(state) {
  return {...state.options};
};

function mapDispatchToProps(dispatch) {
  return {
    toggleConsonantFirst: () => {
      dispatch({
        type: 'TOGGLE_CONSONANT_FIRST',
      })
    },
    toggleVowelFirst: () => {
      dispatch({
        type: 'TOGGLE_VOWEL_FIRST',
      })
    },
    toggleVowelSandwich: () => {
      dispatch({
        type: 'TOGGLE_VOWEL_SANDWICH',
      })
    },
    toggleCursive: () => {
      dispatch({
        type: 'TOGGLE_CURSIVE',
      })
    },
    toggleUpperCaseCursive: () => {
      dispatch({
        type: 'TOGGLE_UPPERCASE_CURSIVE',
      })
    },
    toggleScript: () => {
      dispatch({
        type: 'TOGGLE_SCRIPT',
      })
    },
    toggleUpperCaseScript: () => {
      dispatch({
        type: 'TOGGLE_UPPERCASE_SCRIPT',
      })
    },
    updateNumberOfSyllables: (value) => {
      dispatch({
        type: 'UPDATE_NUMBER_OF_SYLLABLES',
        value: Math.round(value),
      })
    },
  };
};

const Options = connect(mapStateToProps, mapDispatchToProps)(_Options);

export default Options;
