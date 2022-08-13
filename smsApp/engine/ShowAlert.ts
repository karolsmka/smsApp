import { Alert, BackHandler } from "react-native";
export enum smsState{
  FAIL,SUCCESS
}
const showAlert = (state:smsState) => {
  if (state===smsState.SUCCESS)
    Alert.alert(
      "Stan wysłania wiadomości",
      " wiadomość została wysłana pomyslnie",
      [
        {
          text: "ok",
          onPress: () => BackHandler.exitApp()

        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );
  else{
    Alert.alert(
      "Stan wysłania wiadomości",
      " Wystąpił błąd podczas wysyłania wiadomosci. Skontaktuj sie z developerem toworzącym to oprogramowanie",
      [
        {
          text: "ok",
          onPress: () => BackHandler.exitApp()

        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    );

  }
}
export default showAlert;
