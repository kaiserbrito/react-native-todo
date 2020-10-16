import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const ListTodo = ({ item, checkedTodo }) => {

  return (
    <TouchableOpacity>
      <View style={styles.todo}>
        <Icon
          name='delete'
          size={18}
          color='#333'
          onPress={() => checkedTodo(item.id)}
        />
        <Text style={styles.todoText}>{item.todo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoText: {
    marginLeft: 10,
  }
});

export default ListTodo;
