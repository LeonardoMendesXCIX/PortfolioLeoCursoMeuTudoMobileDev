import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SkillScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/perfil.jpg')} style={styles.photo} />
      <Text style={styles.name}>Leonardo Mendes</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.button}>Back to Main</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
});

export default SkillScreen;
