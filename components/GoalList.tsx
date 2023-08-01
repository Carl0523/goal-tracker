import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import GoalItem from "./UI/GoalItem";

export default function GoalList(props) {
  let content = (
    <View style={styles.emptyList}>
      <Image
        source={require("../assets/empty-goal-list.png")}
        alt="emptyList"
        style={styles.emptyListImage}
      />
      <Text style={styles.emptyListText}>Please add goal</Text>
    </View>
  );

  if (props.goalList.length !== 0) {
    content = (
      <FlatList
        data={props.goalList}
        renderItem={(itemData) => {
          return (
            <GoalItem
              goal={itemData.item.title}
              index={itemData.item.id}
              onDeleteHandler={props.onDeleteHandler}
            />
          );
        }}
      />
    );
  }

  return (
    <View style={styles.goalList}>
      <Text style={styles.header}>Goal List</Text>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  goalList: {
    marginTop: "10%",
    flex: 2,
  },
  emptyList: {
    alignSelf: "center",
  },
  emptyListImage: {
    margin: 20,
    width: 150,
    height: 150,
  },
  emptyListText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#b9b8b8',
    textAlign: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#7B8FE5",
    marginBottom: 10,
  },
});
