import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Switch } from 'react-native-paper';

type Produto = {
  id: string;
  nome: string;
  descricao: string;
  imagem: any;
};

const produtos: Produto[] = [
  {
    id: '1',
    nome: 'Terno do Vasco',
    descricao: 'Para se encontrar com a gata',
    imagem: require('./img/TernoVasco.png'),
  },
  {
    id: '2',
    nome: 'Caneca do Vasco',
    descricao: 'Para evitar olhar o marketplace em busca de carro veio',
    imagem: require('./img/CanecaVasco.png'),
  },
  {
    id: '3',
    nome: 'Caneta do Vasco',
    descricao: 'Para se dar bem na entrevista de emprego',
    imagem: require('./img/CanecaVasco.png'),
  },
];

export default function App() {

  const listaProdutos = ({ item }: { item: Produto }) => (
    <View style={styles.container}>
      <View style={styles.card}>

        <Image
          style={styles.imagens}
          source={item.imagem}
        />

        <View style={styles.informacoes}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>

          <View style={styles.favorito}>
            <Text>Favorito?</Text>
            <Switch />
          </View>
        </View>

      </View>
    </View>
  );

  return (
    <FlatList
      data={produtos}
      renderItem={listaProdutos}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    width: "100%",
  },
  imagens: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  informacoes: {
    flex: 1,
    flexDirection: "column",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  favorito: {
    flexDirection: "row",
    alignItems: "center",
  }
});