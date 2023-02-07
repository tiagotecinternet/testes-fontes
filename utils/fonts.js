import { useFonts } from "expo-font";

const carregarFontes = ()=>{
    return [fonteCarregada] = useFonts({
        "carter": require("./assets/fonts/CarterOne-Regular.ttf"),
        "nunito": require("./assets/fonts/NunitoSans-Regular.ttf"),
    });
}

export { carregarFontes }