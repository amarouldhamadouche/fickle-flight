import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
const Search = () => {
  return (
    <View style={styles.container}>
    <Text>Search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}
})

export default Search