import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fontes from './Fontes'

const Produtos = () => {
  return (
    <View style={styles.container}>

    <Fontes>
      <Text style={styles.fonte1}>Fonte Carter: Produtos</Text>
      <Text style={styles.fonte2}>Fonte Nunito: bla bla bla</Text>
      <Button title='Home' onPress={()=>navigation.navigate("Home")} />
    </Fontes>


  </View>
  )
}

export default Produtos

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
  