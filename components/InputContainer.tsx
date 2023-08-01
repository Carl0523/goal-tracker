import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AppHeader from "./UI/AppHeader";

export default function InputContainer(props) {
  const [goal, setGoal] = useState("");

  const inputHandler = (enteredGoal) => {
    setGoal(enteredGoal);
  };

  const addHandler = () => {
    if (goal.trim() === "") {
      return;
    }

    props.onAddNewGoal(goal);

    setGoal("");
    props.onIsAddGoal(false);
  };

  const cancelHandler = () => {
    props.onIsAddGoal(false);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.inputContainer}
        >
          {/* a. App Name and logo */}
          <AppHeader />

          {/* b. Input Field */}
          <TextInput
            placeholder="Push up"
            style={styles.textInput}
            value={goal}
            onChangeText={inputHandler}
          />
          <View style={styles.buttons}>
            {/* c. Button to add goal */}
            <Button title="Add Goal" color="#7B8FE5" onPress={addHandler}/>
            <Button title="Cancel" color="red" onPress={cancelHandler} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
    marginBottom: "10%",
  },

  container: {
    flex: 1,
  },

  textInput: {
    fontSize: 24,

    width: "100%",
    backgroundColor: "rgb(240, 240, 240)",

    borderWidth: 1,
    borderColor: "#7B8FE5",
    borderRadius: 12,

    paddingVertical: "5%",
    paddingHorizontal: "10%",

    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    gap: 50,
  },
});
