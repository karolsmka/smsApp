import React, { useEffect, useState } from "react";
import Person, { IPersonProps } from "./Person";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Button,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from "react-native";
import Message from "./Message";
import AddPerson from "./AddPerson";
import showAlert from "../engine/ShowAlert";
import initiateSMS from "../engine/InitSms";

const Main = ()=> {
  const [message, setMessage] = useState("obiad gotowy");
  const [persons, setPersons] = useState<IPersonProps[]>([]);


  useEffect(() => {
    getDate();

  }, []);

  const getDate = async () => {
    const values = await AsyncStorage.multiGet(["@persons", "@xyz"]);
    values.forEach(value => {
      if (value[0] === "@persons") {
        if (value[1] !== null) {
          const personsValue = JSON.parse(value[1]);
          setPersons(personsValue);
        }
      }
      // i dont have that value only to show that it is possible
      else if (value[0] === "@xyz") {
      }
    });

  };
  const saveDate = async (value: object) => {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@persons", jsonValue);
  };
  //

  const onChange = (name: string, phoneNumber: string, state: boolean) => {
    let newPersons: IPersonProps[] = [];
    if (persons) {
      setPersons((prevPerson) => {
          if (prevPerson.length > 0) {
            newPersons = prevPerson.map(person => {

              if (person.phoneNumber === phoneNumber) {


                return { ...person, state: state };
              }
              return person;
            });
            return newPersons;
          } else
            return [{ name, phoneNumber, state }];
        },
      );
    }
    ;
    saveDate(newPersons);
  };
  const createComponentsPersons = () => {

    return persons.map((person) => (
      <Person name={person.name} phoneNumber={person.phoneNumber} state={person.state} onChange={onChange}
    onDelete={deletePerson} key={person.phoneNumber} /> ))
  };


  const add = (name: string, phone: string) => {
    setPersons((prevPersons) =>
      [...prevPersons, { name: name, phoneNumber: phone, state: false }]);
  };
  const deletePerson = (id: string) => {
    setPersons((prevPersons) => prevPersons.filter((value) => value.phoneNumber !== id));
  };
  const onChangeMessage = (nativeEvent: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setMessage(nativeEvent.nativeEvent.text);
  };
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.restElementStyles}>
    <View style={styles.topElements}>
    <Message msg={message} onChangeMessage={onChangeMessage} />
  <AddPerson add={add} />
  </View>
  <View style={styles.bottomElements}>

  <ScrollView style={{ width: "95%" }}>
  {createComponentsPersons()}
  </ScrollView>
  </View>
  {/*we need to put callback fumction inside of buuton in other way is sending sms every time when the page is refreshing*/}
  </View>
  <View style={styles.buttonStyle}>
  <Button title={"send sms"} color={"#000"} onPress={() => {
    initiateSMS(persons, message, showAlert);
  }} />
  </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  topElements: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
  bottomElements: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginBottom: "1%",
    width: "100%",


  },
  restElementStyles: {
    height: "100%",
    marginTop: "5%",
    width: "100%",
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Main;

