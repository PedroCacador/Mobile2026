import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';

export default function App() {

  const [itens, setItens] = useState<string[]>([]);
  const [texto, setTexto] = useState('');

  const adicionarItem = () => {
    setItens([...itens, texto]);
    setTexto('');
  };

  return (
    <View style={styles.container}>
      <Text>Digite o item desejado para adicionar a lista</Text>
      <TextInput placeholder='Digite aqui' value={texto} onChangeText={setTexto} />
      <Button title='ADICIONAR NA LISTA' onPress={adicionarItem} />
      <ScrollView>
        {itens.map((itens, index) => (
          <Text key={index}>{itens}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
