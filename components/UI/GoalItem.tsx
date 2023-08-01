import { StyleSheet, Text, Pressable } from "react-native";

export default function GoalItem(props) {

  // const removeGoal = () =>
  // {
  //   props.onDeleteHandler(props.index);
  // }

  return (
      <Pressable onPress={props.onDeleteHandler.bind(this, props.index)} style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalItem} key={props.index}>
          {props.goal}
        </Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#a7b1de",
    

    padding: 16,
    marginBottom: 10,

    borderRadius: 12,

    /**
     * According to doc: If the rounded border is not visible,
     * try applying overflow: 'hidden' as well.
     */
    overflow: "hidden",
  },
  pressedItem : {
    opacity: 0.5
  }
});
