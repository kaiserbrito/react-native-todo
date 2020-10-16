import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import Header from './components/Header';
import ListTodo from './components/ListTodo';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: Math.random().toString(),
      todo: 'Buy food'
    },
    {
      id: Math.random().toString(),
      todo: 'Drink coffee'
    },
    {
      id: Math.random().toString(),
      todo: 'Play guitar'
    },
  ]);

  const submitTodo = (todo) => {
    if (todo) {
      setTodos(prevTodos => ([{ id: Math.random().toString(), todo }, ...prevTodos]));
    } else {
      Alert.alert('Error', 'Please add a valid remider!', [
        { text: 'Ok', style: 'cancel' }
      ]);
    }
  }

  const checkedTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitTodo={submitTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ListTodo
                  item={item}
                  checkedTodo={checkedTodo}
                />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 40
  }
});

export default App;
