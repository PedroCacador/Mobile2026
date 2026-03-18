import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import { Modal } from 'react-native-paper'
import { useViewModelLista } from '../viewmodels/useViewModelLista';
import { Item } from '../modelos/Item';

export default function VisaoLista() {
  const {
    itens,
    textoEntrada,
    setTextoEntrada,
    mensagemErro,
    lidarComAdicionarItem,
    lidarComRemoverItem
  } = useViewModelLista();

  return (
    <View style={estilos.recipiente}>
      <Text style={estilos.titulo}>Minha Lista</Text>

      <View style={estilos.recipienteEntrada}>
        <TextInput
          style={estilos.entrada}
          placeholder="Digite um produto, pet, etc."
          value={textoEntrada}
          onChangeText={setTextoEntrada}
        />
        <View style={estilos.botaoAdicionar}>
          <TouchableOpacity style={estilos.adicionar}onPress={lidarComAdicionarItem}>
            <Text style={{color: 'white'}}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
      {mensagemErro ? <Text style={estilos.erro}>{mensagemErro}</Text> : null}

      <FlatList
        data={itens}
        keyExtractor={(item: Item) => item.id.toString()}
        renderItem={({ item }: { item: Item }) => (
          <View style={estilos.cartaoItem}>
            <Text style={estilos.textoItem}>{item.nome}</Text>
            <TouchableOpacity style={estilos.adicionar}onPress={() => lidarComRemoverItem(item.id)}>
            <Text style={{color: 'white'}}>REMOVER</Text>
          </TouchableOpacity>
          </View>
        )}
        style={estilos.lista}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  recipiente: {
    flex: 1,
    padding: 24,
    backgroundColor: '#232323',
    paddingTop: 60,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  recipienteEntrada: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  entrada: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 12,
    marginRight: 8,
    borderRadius: 6,
    fontSize: 16,
  },
  botaoAdicionar: {
    justifyContent: 'center',
  },
  erro: {
    color: 'red',
    marginBottom: 16,
    fontSize: 14,
  },
  lista: {
    flex: 1,
    marginTop: 8,
  },
  cartaoItem: {
    backgroundColor: '#2c2c2c',
    padding: 16,
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#f0007a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  textoItem: {
    fontSize: 16,
    color: 'white',
  },
  adicionar: {
    backgroundColor: '#f0007a',
    padding: 13,
    borderRadius: 2
  }
  
});