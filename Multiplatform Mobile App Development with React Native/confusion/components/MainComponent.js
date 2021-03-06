import React, { Component } from "react";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import Dishdetail from "./DishdetailComponent";
import { View, Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

const MenuNavigator = createStackNavigator(
  {
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail },
  },
  {
    initialRoute: "Menu",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "red",
      },
      headerTintColor: "#fff",
      headerTitleStyle: { color: "#fff" },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "red",
      },
      headerTintColor: "#fff",
      headerTitleStyle: { color: "#fff" },
    },
  }
);

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      title: "Home",
      drawLabel: "Home",
    },
  },
  Menu: {
    screen: MenuNavigator,
    navigationOptions: {
      title: "Menu",
      drawLabel: "Menu",
    },
  },
});

const AppContainer = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppContainer />
      </View>
    );
  }
}

export default Main;
