import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome"

const menuData = [
  { icon: "home", name: "Home", screenName: "Home", key: 1 },
  { icon: "cog", name: "Settings", screenName: "Settings", key: 2 },
];

class DrawerMenu extends Component {
  render() {
    return (
      <View style={styles.container}> 
      <Image source={require("../assets/metallica-header.png")} style={{height: 80, width: 250, alignSelf: "center"}} />
      <View style={{width: "90%", borderColor: "white", borderWidth: 2, marginTop: 20, alignSelf: "center"}}></View>
        <FlatList
          data={menuData}
          renderItem={({ item }) => (
            <DrawerItem
              navigation={this.props.navigation}
              screenName={item.screenName}
              icon={item.icon}
              name={item.name}
              key={item.key}
            />
          )}
        />
      </View>
    )
  }
}

const DrawerItem = ({ navigation, icon, name, screenName }) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate(`${screenName}`, { isStatusBarHidden: false })
    }
  >
    <Icon name={icon} size={25} color="white" style={{ margin: 15 }} />
    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 70
  },
  menuItem: {
    flexDirection: "row"
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: "300",
    margin: 15,
    color: "white"
  }
});

export default DrawerMenu;