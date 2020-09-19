import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import {Audio} from "expo-av";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Privacy from "./components/Privacy";
import Credits from "./components/Credits";
import {FontAwesome5} from "@expo/vector-icons";
import DrawerMenu from "./components/DrawerMenu";
import { Provider as PaperProvider } from 'react-native-paper';

// create drawer navigator
const DrawerNavigation = createDrawerNavigator(
  {
    Home: Home,
    Settings: Settings,
    Privacy: Privacy,
    Credits: Credits
  },
  {
    initialRouteName: "Home",
    drawerBackgroundColor: "black",
    contentOptions: {
      activeTintColor: "white"
    },
    contentComponent: DrawerMenu
  }
)

const Router = createAppContainer(
  createSwitchNavigator({
    DrawerNavigation
  })
)

class App extends React.Component {
  state = {
    clips: [
      
    ]
  }

  render() {
    return (
      <PaperProvider>
        <Router />
      </PaperProvider>
    );
  } 
}

const styles = StyleSheet.create({
  main: {
    padding: 30,
    marginBottom: 40
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  headerText: {
    fontSize: 28, 
    textAlign: "center",
    marginTop: 10, 
    color: "#2196f3", 
    textDecorationLine: "underline"
  },
  goalInput: {
    fontSize: 20, 
    borderColor: "#D3D3D3", 
    borderWidth: 1, 
    padding: 6,
    borderRadius: 8,
    width: "60%",
    
  },
  addButton: {
    width: "30%",
    fontSize: 20, 
  },
  dividerView: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginTop: 20,
  },
  text: {
    color: "#212121",
    fontSize: 20,
    marginLeft: 10
  },
  title: {
    width: "60%"
  },
  goal: {
    borderColor: "#212121",
    borderWidth: 2,
    marginTop: 20,
    justifyContent: "space-evenly",
    backgroundColor: "#64b5f6",
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    width: "15%",
    height: 50,
    marginTop: 20,
    
  }
});

export default App;
