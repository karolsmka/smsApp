import {
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import React, { useRef, useState } from "react";

interface IAddPerson {
  add: (name: string, phone: string) => void;
}

const AddPerson = ({ add }: IAddPerson) => {
  const [person, setPerson] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const onChangePerson = (nativeEvent: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPerson(nativeEvent.nativeEvent.text);
  };
  const onChangePhone = (nativeEvent: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPhoneNumber(nativeEvent.nativeEvent.text);
  };
  const addP = () => {
    //undefined
    if (add) {
      console.log("dodaje2");
      add(person, phoneNumber);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>

        <TextInput style={styles.textInput} onChange={onChangePerson} placeholder={"imie"} value={person}
                   multiline={true} />
        <TextInput style={[styles.textInput]} placeholder={"numer telefonu"} onChange={onChangePhone}
                   value={phoneNumber} multiline={true} />
      </View>
      <View style={styles.buttonStyle}>
        <Button onPress={addP} title="dodaj"></Button>
      </View>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {

    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,

  },

  inputs: {
    flexDirection: "row",
    marginTop: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    flexDirection: "column",
    marginTop: "8%",
    height: 100,
  },
  textInput: {
    textAlignVertical: "top",
    textDecorationLine: "none",
    marginLeft: "2%",
    marginRight: "2%",
    flex: 3,
    height: 40,
    fontSize: 15,
    color: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  setGreen: {
    backgroundColor: "green",
  },
  text: {
    fontSize: 24,

  },

});
export default AddPerson;
