import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { instanciaServicoItem } from '../servicos/ServicoItem';
import { useNavigation } from '@react-navigation/native';

export default function VisaoAdicionar() {
  const [texto, setTexto] = useState('');
  const [erro, setErro] = useState('');
  const navigation = useNavigation<any>();

  const adicionar = () => {
    try {
      setErro('');
      instanciaServicoItem.adicionarItem(texto);
      setTexto('');
      navigation.goBack();
    } catch (e) {
      if (e instanceof Error) setErro(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite algo..."
        value={texto}
        onChangeText={setTexto}
        style={styles.input}
      />

      {erro ? <Text style={{ color: 'red' }}>{erro}</Text> : null}

      <TouchableOpacity style={styles.botao} onPress={adicionar}>
        <Text style={{ color: 'white' }}>ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#232323' },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#f0007a',
    padding: 12,
    alignItems: 'center',
  },
});