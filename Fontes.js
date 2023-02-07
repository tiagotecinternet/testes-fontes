import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';

const Fontes = ({children}) => {
    const [fonteCarregada] = useFonts({
        "carter": require("./assets/fonts/CarterOne-Regular.ttf"),
        "nunito": require("./assets/fonts/NunitoSans-Regular.ttf"),
    });

    if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;

    return (
        <View>
        {children}
        </View>
    )
}

export default Fontes

const styles = StyleSheet.create({})