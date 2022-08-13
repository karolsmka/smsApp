import { IPersonProps } from "../components/Person";
// @ts-ignore
import SmsAndroid from "react-native-get-sms-android";
import { smsState } from "./ShowAlert";


const initiateSMS = (persons: IPersonProps[], message: string,showAlert:(state:smsState)=>void) => {
  if (persons.length < 1)
    return;
  // Check for perfect 10 digit length

  const phoneNumbers = persons.map((person) => {

    if (person.state) return person.phoneNumber;
    return;
  });

  phoneNumbers.map((phone) => {

    if (phone) {
      SmsAndroid.autoSend(
        JSON.stringify(phone),
        message,
        // @ts-ignore
        (fail) => {
          showAlert(smsState.FAIL);
          console.log("Failed with this error: " + fail);
        },
        // @ts-ignore
        (success) => {
          showAlert(smsState.SUCCESS);
          console.log("SMS sent successfully");
        },
      );
    }
  });
};
export default initiateSMS;
