import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
const Booking = () => {
  return (
    <View style={styles.container}>
    <Text>Booking</Text>
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
export default Booking