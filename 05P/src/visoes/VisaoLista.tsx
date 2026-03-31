import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useViewModelLista } from '../viewmodels/useViewModelLista';
import { Item } from '../modelos/Item';
import { useNavigation } from '@react-navigation/native';

export default function VisaoLista() {
  const { itens, lidarComRemoverItem } = useViewModelLista();
  const navigation = useNavigation<any>();

  return (
    <View style={estilos.recipiente}>
      <Text style={estilos.titulo}>Minha Lista</Text>

      <TouchableOpacity
        style={estilos.adicionar}
        onPress={() => navigation.navigate('Adicionar')}
      >
        <Text style={{ color: 'white' }}>IR PARA ADICIONAR</Text>
      </TouchableOpacity>

      <FlatList
        data={itens}
        keyExtractor={(item: Item) => item.id}
        renderItem={({ item }: { item: Item }) => (
          <View style={estilos.cartaoItem}>
            <Text style={estilos.textoItem}>{item.nome}</Text>

            <TouchableOpacity
              style={estilos.adicionar}
              onPress={() => lidarComRemoverItem(item.id)}
            >
              <Text style={{ color: 'white' }}>REMOVER</Text>
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
  },
  textoItem: {
    fontSize: 16,
    color: 'white',
  },
  adicionar: {
    backgroundColor: '#f0007a',
    padding: 13,
    borderRadius: 2,
    alignItems: 'center',
    marginBottom: 10,
  },
});