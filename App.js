import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { key: Math.random().toString(), value: enteredGoalText }
    ]);
    setEnteredGoalText(''); // Clear the input field after adding the goal
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <FlatList 
        style={styles.goalsContainer}
        data={courseGoals}
        renderItem={(itemData) => (
          <Text style={styles.goalItem}>{itemData.item.value}</Text>
        )}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  textInput: {
    fontSize: 20,
    borderWidth: 0.5,
    borderRadius: 2,
    width: '70%',
    marginRight: 10,
    padding: 10,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 30,
  },
  goalItem: {
    margin: 8,
    borderRadius: 7,
    backgroundColor: 'purple',
    color: 'white',
    height: 50,
    paddingLeft: 10,
    textAlignVertical: 'center',
    fontSize: 20,
  },
});
