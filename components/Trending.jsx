import React from 'react'
import { View, Text, Image } from "react-native"

export const Trending = ({img, title, from, detail}) => {
  return (
   <View style={{width:150, margin: 10, padding: 10,backgroundColor: "#ffffff", borderRadius: 10 }}>
     <Image source={{uri: img}} style={{height: 90,width: "100%"}} />
     <View style={{marginTop: 10, display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
      <View>
       <Text style={{fontSize: 16, fontFamily: "Inter-600", lineHeight: 17}}> {title} </Text>
       <Text style={{color: "#4D5760", fontSize: 12, fontFamily: "Inter-400", lineHeight: 15}}> {from} </Text>
     </View>
     <Text style={{color: "#4D5760", fontSize: 12, fontFamily: "Inter-400", lineHeight: 15}}> {detail} </Text>
     </View> 
   </View>
  )
}




