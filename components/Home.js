import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome"
import { Avatar } from 'react-native-paper';
import Kirk from "./Kirk";
import James from "./James"
import Rob from "./Rob";

const Home = ({navigation}) => {
  const [currentMember, setCurrentMember] = useState("james");
  const [members, setmembers] = useState([
    {
      name: "james",
      id: 1
    },
    {
      name: "kirk",
      id: 2
    },
    {
      name: "lars",
      id: 3
    },
    {
      name: "rob",
      id: 4
    }
  ]);

  const changeMember = (m) => {
    setCurrentMember(m);
  }

  return (
    <SafeAreaView style={{backgroundColor: "black", flex: 1, paddingTop: 10}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{color: "white", fontSize: 22}}>Metallica Soundboard</Text>
      </View>
      <View style={styles.menuButtons}>
        {
          members.map((member) => {
            return (
              <Button key={member.id} style={styles.menuButton} color="white" mode="text" onPress={() => changeMember(member.name)}>
                {member.name === currentMember ? <Text style={{ color: "#f44336"}}>{member.name}</Text> : <Text>{member.name}</Text>}
              </Button>
            )
          })
        }
      </View>
      <View style={{backgroundColor: "#222222", flex: 3}}>
        {
          {
            "kirk": <Kirk />,
            "james": <James />,
            "rob": <Rob />
          }[currentMember]
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flex: 0,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingBottom: 30,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  menuButton: {
    width: "25%",
    fontSize: 12,
    backgroundColor: "black"
  },
  menuButtons: {
    alignItems: "center", 
    justifyContent: "space-evenly", 
    flexDirection: "row", 
    marginTop: 20, 
    marginBottom: 20,
    backgroundColor: "black",
    color: "white",
    flex: 0,
    padding: 10
  }
})


export default Home;
