import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddTodo = ({ submitTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const changeInput = (val) => { setNewTodo(val); }

  return (
    <View>
      <TextInput
        clearButtonMode='always'
        style={styles.input}
        placeholder='I need to remember to do'
        onChangeText={changeInput}
        value={newTodo}
      />
      <Button title='Submit' onPress={() => submitTodo(newTodo)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#ddd',
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderBottomWidth: 1
  }
});

export default AddTodo;

