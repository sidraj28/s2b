import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
const App = () => {
  return (
    <WebView source={{ uri: 'https://www.apple.com/in/' }} style={{ flex: 1 }} />
  )
}

export default App

const styles = StyleSheet.create({})