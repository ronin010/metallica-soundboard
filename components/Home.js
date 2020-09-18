import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';

import Icon from "react-native-vector-icons/FontAwesome"


const Home = ({navigation}) => {
  const [member, setMember] = useState("james");

  const changeMember = (m) => {
    setMember(m);
  }

  return (
    <View style={{backgroundColor: "black"}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{color: "white", fontSize: 16}}>Metallica Soundboard</Text>
      </View>
        <View style={styles.menuButtons}>
        <Button style={styles.menuButton} color="white" mode="text" onPress={() => changeMember("james")}>
          James
        </Button>
        <Button style={styles.menuButton} color="white" mode="text" onPress={() => changeMember("kirk")}>
          Kirk
        </Button>

        <Button style={styles.menuButton} color="white" mode="text" onPress={() => changeMember("Rob")}>
          Rob
        </Button>
        <Button style={styles.menuButton} color="white" mode="text" onPress={() => changeMember("lars")}>
          Lars
        </Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: "100%",
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 40,
    paddingLeft: 60,
    paddingRight: 140,
    paddingTop: 60,
    color: "white"
  },
  menuButton: {
    width: "25%",
    fontSize: 12
  },
  menuButtons: {
    alignItems: "center", 
    justifyContent: "space-evenly", 
    flexDirection: "row", 
    marginTop: 20, 
    marginBottom: 20,
    backgroundColor: "black",
    color: "white"
  }
})


export default Home;