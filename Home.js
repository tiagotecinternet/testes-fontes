import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fontes from './Fontes'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Fontes>
        <Text style={styles.fonte1}>Fonte Carter</Text>
        <Text style={styles.fonte2}>Fonte Nunito</Text>
        <Button title='Produtos' onPress={()=>navigation.navigate("Produtos")} />
      </Fontes>


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    fonte1: { 
      fontFamily: "carter",
      fontSize: 26,
      textAlign: "center"
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
  