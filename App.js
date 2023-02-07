import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
 const [fonteCarregada] = useFonts({
    "carter": require("./assets/fonts/CarterOne-Regular.ttf"),
    "nunito": require("./assets/fonts/NunitoSans-Regular.ttf"),
  });

  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.fonte1}>Fonte Carter</Text>
      <Text style={styles.fonte2}>Fonte Nunito</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  fonte1: { 
    fontFamily: "carter",
    fontSize: 22
  },
  fonte2: { 
    fontFamily: "nunito",
    fontSize: 18
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
