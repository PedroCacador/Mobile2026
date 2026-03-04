import { Text, SafeAreaView, StyleSheet,TextInput,Button,Alert } from 'react-native';
import { Card } from 'react-native-paper';
import React, { useState } from 'react';

export default function App() {

  const [texto,setTexto] = useState('');
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Digite seu nome</Text>
      <Card>
        <TextInput value={texto} onChangeText={setTexto}></TextInput>
        <Button title='Clique AQUI!' onPress={()=>alert(texto)}></Button>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
