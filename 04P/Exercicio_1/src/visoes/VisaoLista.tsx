import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useViewModelLista } from '../viewmodels/useViewModelLista';
import { Item } from '../modelos/Item';

export default function VisaoLista() {
  const { itens, textoEntrada, setTextoEntrada, mensagemErro, lidarComAdicionarItem } = useViewModelLista();

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
        <Button title="Adicionar" onPress={lidarComAdicionarItem} color="#007bff" />
      </View>

      {mensagemErro ? <Text style={estilos.erro}>{mensagemErro}</Text> : null}

      <FlatList
        data={itens}
        keyExtractor={(item: Item) => item.id}
        renderItem={({ item }: { item: Item }) => (
          <View style={estilos.cartaoItem}>
            <Text style={estilos.textoItem}>{item.nome}</Text>
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
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333'
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
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 6,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  textoItem: {
    fontSize: 16,
    color: '#333',
  },
});
