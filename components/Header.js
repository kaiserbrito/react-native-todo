import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Todo APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: 'coral'
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default Header;
