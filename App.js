import React from 'react';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import RewardsScreen from  './screens/RewardsScreen'
import FaqScreen from './screens/FaqScreen'
import { Ionicons } from 'react-native-vector-icons'

const MainNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Rewards: RewardsScreen,
  FAQs: FaqScreen
},
  {
    tabBarOptions: {
      activeTintColor: '#FF4713',
      inactiveTintColor: '#DCDCDC',
      activeBackgroundColor: '#000',
      inactiveBackgroundColor: '#000',
      labelStyle: {
        fontSize: 15,
        margin: 0,
        padding: 0,
      },
    }
  })

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainNavigator
}, {
  initialRouteName: 'Login'  
})

HomeScreen.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name="ios-home"
      size={25}
      color={tintColor}
    />
  )
};

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <AppNavigator />
    );
  }
}
