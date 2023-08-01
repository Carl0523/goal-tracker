import { useState } from "react";
import Constants from "expo-constants";
import InputContainer from "./components/InputContainer";
import GoalList from "./components/GoalList";
import { StyleSheet, View, Button } from "react-native";
import AppHeader from "./components/UI/AppHeader";
import CustomButton from "./components/UI/CustomButton";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isAddGoal, setIsAddGoal] = useState(false);

  const addNewGoalHandler = (newGoal: String) => {
    setGoalList((prevList) => {
      return [{ title: newGoal, id: Math.random() }, ...prevList];
    });
  };

  const deleteHandler = (id) => {
    setGoalList((prevList) => {
      return prevList.filter((item) => item.id !== id);
    });
  };

  const openModal = () => {
    setIsAddGoal(true);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <AppHeader/>
        <CustomButton text='Add Goal' color='#7B8FE5' action={openModal}/>
        {/* <Button title="Add Goal" color="#7B8FE5" onPress={openModal} /> */}
      </View>
      <InputContainer
        visible={isAddGoal}
        onAddNewGoal={addNewGoalHandler}
        onIsAddGoal={setIsAddGoal}
      />
      <GoalList goalList={goalList} onDeleteHandler={deleteHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: '5%',
  },
  header: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: 'center',
    paddingBottom: '10%',
    borderBottomWidth: 1,
    borderBottomColor: '#bdbcbc',
  }
});
