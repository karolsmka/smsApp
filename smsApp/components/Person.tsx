import { Button, SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export interface IPersonProps {
  name: string;
  phoneNumber: string;
  state: boolean;
  onChange?: (name: string, id: string, state: boolean) => void;
  onDelete?: (id: string) => void;
}


const Person = ({ name, phoneNumber, onChange, onDelete, state}: IPersonProps) => {
  console.log("hej");
  const [isEnabled, setIsEnabled] = useState(state);
  useEffect(() => {
    if (onChange) {
      onChange(name, phoneNumber, isEnabled);
    }
  }, [isEnabled]);
  const handleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  const handleDelete = () => {
    if(onDelete)
      onDelete(phoneNumber);
  };
  return (
    <View style={styles.container}>
      <View style={[styles.nameContainer, isEnabled ? styles.setGreen : styles.container]}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={[styles.switchContainer, isEnabled ? styles.setGreen : styles.container]}>
        <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} value={isEnabled} disabled={false}
                onValueChange={handleSwitch} />
      </View>
      <Button title={"delete user"} onPress={handleDelete} />
    </View>
  );//
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "1%",
    paddingTop: "1%",
    width:"100%",
    flex:1,


  },
  nameContainer: {
    flexDirection: "row",
    flex:6,
    height:"90%",
    margin: "1%",
    alignItems: "center",
    justifyContent: "center",
  },
  switchContainer: {
    flexDirection: "row",
    flex:1,
    margin: "1%",

    alignItems: "center",
    justifyContent: "center",

  },
  setGreen: {
    backgroundColor: "#83f28f",
  },
  text: {
    fontSize: 24,

  },

});
export default Person;
