import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }: any) => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/perfil.jpg')} style={styles.photo} />
      <Text style={styles.name}>Leonardo Mendes</Text>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => handleLinkPress('https://github.com/LeonardoMendesXCIX')}>
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress('https://www.linkedin.com/in/leonardobelodasilvamendes/')}>
          <Text style={styles.link}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Skill')}>
        <Text style={styles.button}>Go to Skills</Text>
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
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  button: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
});

export default MainScreen;
