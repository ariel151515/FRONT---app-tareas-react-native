import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="auto"/>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#222f3e',
        padding:20,
        flex: 1, // asi toma todo el alto de la app
        alignItems: 'center',
        color:'#000'
    }
})

export default Layout