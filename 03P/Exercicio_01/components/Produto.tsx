import { StyleSheet, Text, View, ImageBackground, Switch, ImageSourcePropType } from 'react-native';

type dadosProduto = {
  name: string;
  descricao: string;
  imagem: ImageSourcePropType;
};

export default function Produto(props: dadosProduto) {
  return (
    <View style={styles.card}>

      <ImageBackground 
        source={props.imagem} 
        style={styles.imagens}
      />
      <View style={styles.informacoes}>
        <Text style={styles.nome}>{props.name}</Text>
        <Text style={styles.descricao}>{props.descricao}</Text>

        <View style={styles.favorito}>
          <Text>Favorito?</Text>
          <Switch/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
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
    alignItems: "center"
  }
});