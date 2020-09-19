import React, {Component} from "react";
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image,  } from 'react-native';
import { Avatar } from 'react-native-paper';
import {Audio} from "expo-av";
import {Files} from "../audio/kirk/Files";

class Kirk extends Component {
  // set state.files to the import files array
  state = {
    files: Files
  }
  
  // configure audio settings on componenet mount
  async componentDidMount() {
    Audio.setAudioModeAsync({
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: false
    });

    // create new object to access audio playing methods
    this.sound = new Audio.Sound();
    const status = {
      shouldPlay: false,
      volume: 1.0
    }
  }
  
  // method to play audio
  // the clip path is passed as a parameter
  // any current loaded audio is un-loaded, then we await for the new audio to be loaded
  // then finally the audio is played
  handlePlayAudio = async (audio) => {
    this.sound.unloadAsync()
    await this.sound.loadAsync(audio, this.sound.status, false);
    this.sound.playAsync();
  }

  render() {
    return ( 
      <View style={{ flexDirection: "row", flexWrap: "wrap", width: "100%", position:'absolute', alignItems: "center", marginTop: 20}}>
        {
          // map the files and return a touchable area for each one to play the audio 
          this.state.files.map((file) => {
            return (
              // each touchable area with have an onPress to play the audio, and the specific clip for the iteration is passed to the function
              <TouchableOpacity style={{width: "33.33%", marginBottom: 20, alignItems: "center"}} key={file.id} onPress={() => this.handlePlayAudio(file.clip)}>
                <View>
                  <Avatar.Image size={60} source={file.image} />
                </View>
                <Text style={{fontSize: 12, marginTop: 10}}>{file.title.toUpperCase()}</Text>    
              </TouchableOpacity>  
            )
          })
        }
      </View>
      
    )
  }
}

export default Kirk;
