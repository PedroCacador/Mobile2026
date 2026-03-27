import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useViewModelLista } from '../viewmodels/useViewModelLista';
import { useNavigation } from '@react-navigation/native';

export default function VisaoAdicionar() {
  const {
    textoEntrada,
    setTextoEntrada,
    mensagemErro,
    lidarComAdicionarItem
  } = useViewModelLista();

  const navigation = useNavigation();

  const adicionar = () => {
    lidarComAdicionarItem();
    navigation.goBack();
  };

  return (
    <View style={estilos.recipiente}>
      <Text style={estilos.titulo}>Adicionar Item</Text>

      <TextInput
        style={estilos.entrada}
        placeholder="Digite algo..."
        value={textoEntrada}
        onChangeText={setTextoEntrada}
      />

      {mensagemErro ? <Text style={estilos.erro}>{mensagemErro}</Text> : null}

      <TouchableOpacity style={estilos.botao} onPress={adicionar}>
        <Text style={{ color: 'white' }}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  recipiente: {
    flex: 1,
    padding: 24,
    backgroundColor: '#232323',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center'
  },
  entrada: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10
  },
  erro: {
    color: 'red',
    marginBottom: 10
  },
  botao: {
    backgroundColor: '#f0007a',
    padding: 15,
    alignItems: 'center',
    borderRadius: 6
  }
});