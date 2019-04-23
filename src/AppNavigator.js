import React from "react";
import HomeScreen from "./screens/HomeScreen";
import EventDetailsScreen from "./screens/EventDetailsScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeAltScreen from "./screens/HomeAltScreen";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    HomeAlt: {
      screen: HomeAltScreen
    },
    EventDetails: {
      screen: EventDetailsScreen,
      navigationOptions: {
        title: "Event Details"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
