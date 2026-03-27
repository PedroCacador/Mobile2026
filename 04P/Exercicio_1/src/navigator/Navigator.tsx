import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VisaoLista from './visoes/VisaoLista';
import VisaoAdicionar from './visoes/VisaoAdicionar';

export type StackParamList = {
  Lista: undefined;
  Adicionar: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={VisaoLista} />
      <Stack.Screen name="Adicionar" component={VisaoAdicionar} />
    </Stack.Navigator>
  );
}