import {
  findNodeHandle,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData, TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { ChangeEvent, useEffect, useRef } from "react";
import React, { useState } from "react";
interface msgProps{
  msg:string;
  onChangeMessage: (nativeEvent:NativeSyntheticEvent<TextInputChangeEventData>)=>void

}
const Message = ({msg,onChangeMessage}:msgProps) => {
  //const ref = useRef(null);
  return(
    <View style={styles.container}>
      <Text>Wiadomość</Text>
          <TextInput style={styles.textInput} onChange={onChangeMessage} value={msg} multiline={true}/>

      </View>
  );
};
const styles = StyleSheet.create({
  container:{
    width: '95%',
    alignItems: "center",
    justifyContent: "center",
    flex:1
  },
  textInput: {
    textAlignVertical: 'top',
    width: '100%',
    height:"80%",
    fontSize: 20,
    paddingBottom:20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  setGreen: {
    backgroundColor: "green",
  },
  setBlack: {
    backgroundColor: "#213832",
  },
  text: {
    fontSize: 24,

  },

});
export default Message;
