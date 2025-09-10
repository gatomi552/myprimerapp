import { View, Text, StyleSheet, TextComponent } from 'react-native'
import React from 'react'
import { blue } from 'react-native-reanimated/lib/typescript/Colors'

const HelloWorldtext = () => {
  return (
    <View style={styles.Text}>
      <Text style={styles.Tex}>✌️✌️ Hola mundo! 👍👍</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Text: {
    flex: 1,
    backgroundColor: '#30D5C8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '58%',
    maxHeight: '32%',
  },
  Tex:{
    color: 'gray',
    fontSize: 25,
    fontWeight: 'bold',
  }
 })

export default HelloWorldtext