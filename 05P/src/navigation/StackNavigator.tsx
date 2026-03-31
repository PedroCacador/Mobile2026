import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VisaoLista from '../visoes/VisaoLista';
import VisaoAdicionar from '../visoes/VisaoAdicionar';
import VisaoVasco from '../visoes/VisaoVasco';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ListaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={VisaoLista} />
      <Stack.Screen name="Adicionar" component={VisaoAdicionar} />
    </Stack.Navigator>
  );
}

export default function StackNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lista" component={ListaStack}/>
      <Tab.Screen name="Vasco" component={VisaoVasco} />
    </Tab.Navigator>
  );
}