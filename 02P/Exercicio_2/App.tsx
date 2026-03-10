import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

export default function App() {

  const Baboon = require('./assets/Baboon.png');

  return (
    <View style={styles.container}>
      <Card>
        <ScrollView>
          <Image style={styles.baboon}source={Baboon}></Image>
          <Image style={styles.baboon}source={Baboon}></Image>
          <Image style={styles.baboon}source={Baboon}></Image>
          <Image style={styles.baboon}source={Baboon}></Image>
          <Image style={styles.baboon}source={Baboon}></Image>
        </ScrollView>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  baboon: {
    padding: 60,

  }
});
