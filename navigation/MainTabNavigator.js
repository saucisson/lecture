import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Letters from '../components/Letters';
import Game from '../components/Game';
import Score from '../components/Score';
import Explanation from '../components/Explanation';
import Options from '../components/Options';

const LettersStack = createStackNavigator({
  Letters: Letters,
});

LettersStack.navigationOptions = {
  tabBarLabel: 'Lettres',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const OptionsStack = createStackNavigator({
  Options: Options,
});

OptionsStack.navigationOptions = {
  tabBarLabel: 'Options',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const GameStack = createStackNavigator({
  Game: Game,
});

GameStack.navigationOptions = {
  tabBarLabel: 'Jeu',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ScoreStack = createStackNavigator({
  Score: Score,
});

ScoreStack.navigationOptions = {
  tabBarLabel: 'Score',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ExplanationStack = createStackNavigator({
  Explanation: Explanation,
});

ExplanationStack.navigationOptions = {
  tabBarLabel: 'Aide',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  LettersStack,
  OptionsStack,
  GameStack,
  ScoreStack,
  ExplanationStack,
});
