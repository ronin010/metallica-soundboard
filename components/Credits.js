import React, {Component} from "react";
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome"

const Credits = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: "black", flex: 1, paddingTop: 10}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{color: "white", fontSize: 22}}>Metallica Soundboard</Text>
      </View>
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text style={{color: "white", textAlign: "center"}}>Credits Page</Text>
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
  }
})

export default Credits;
