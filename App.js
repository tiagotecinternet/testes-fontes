
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Fontes from './Fontes';
import Home from './Home';
import Produtos from './Produtos';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Produtos" component={Produtos} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
    
  );
}

