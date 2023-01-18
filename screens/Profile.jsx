import { View, Text, Dimensions,Image,TouchableOpacity, StatusBar,  LogBox, StyleSheet,  ScrollView, ImageBackground } from "react-native";
import React, { useState } from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { images } from "../components/data";
import { useNavigation } from "@react-navigation/native";
import Dialog from "react-native-dialog"

export default function Profile() {
 const navigation = useNavigation()
 const [visible, setVisible] = useState(false)

 return (
  <View style={StyleSheet.container}>
    <StatusBar
      hidden={true}
    />
    <ImageBackground source={{uri: images[0]}} style={{height:Dimensions.get('window').height * 0.25, paddingTop: "10%", resizeMode: "cover"}} >
      <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15}}>
        <TouchableOpacity style={{backgroundColor: "white", height: 36, width: 36, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center" }} onPress={()=>navigation.goBack()}>
           <Ionicons name='arrow-back' size={22} />
         </TouchableOpacity> 
         <TouchableOpacity style={{backgroundColor: "white", height: 36, width: 36, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center" }} onPress={()=>setVisible(true)} >
           <SimpleLineIcons name='pencil' size={22} />
         </TouchableOpacity> 
      </View>
    </ImageBackground>
    
    <View style={{position: "relative", backgroundColor: "white", marginTop: -10,borderTopRightRadius:10, borderTopLeftRadius:10, height: Dimensions.get("window").height * 0.64, paddingHorizontal: 15}}>
      <View style={{width: 84, height: 84, borderRadius: 42, position:"absolute", top: -42, left: 15, borderWidth: 3, borderColor: "white", overflow: "hidden"}}>
        <Image source={require('../assets/avatar.png')} style={{ width: "100%", height: "100%" }}/>
      </View>
      <Text style={{fontSize: 24, fontWeight: "700", color: "#191919", marginTop: 42}}>
        Macy jonson
      </Text>
      <Text style={{color: "#7E8B97"}}>
        baguio, philippines
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always" style={{paddingBottom: 10}}>
      <Text style={{color: "#191919", marginTop: 10}}>
        i like the beaches, mountains, forsts and everything about nature!
      </Text>
      <View style={{borderBottomWidth: 1, borderBottomColor: "#F5F6F8",marginVertical: 10}}/> 
      <TouchableOpacity style={{display: "flex", flexDirection: "row", alignItems: "center",marginVertical: 10}}>
        <View style={{padding: 5, backgroundColor: "#F1F7FD", marginRight: 15}}>
          <MaterialIcons name="payment" size={20} color="#1262AE"/>
        </View>
        <Text style={{fontSize: 16, fontWeight: "500"}}>Payment Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: "flex", flexDirection: "row", alignItems: "center",marginVertical: 10}}>
        <View style={{padding: 5, backgroundColor: "#F1F7FD", marginRight: 15}}>
          <FontAwesome5 name="shield-virus" size={20} color="#1262AE"/>
        </View>
        <Text style={{fontSize: 16, fontWeight: "500"}}>Covid Advisory</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: "flex", flexDirection: "row", alignItems: "center",marginVertical: 10}}>
        <View style={{padding: 5, backgroundColor: "#F1F7FD", marginRight: 15}}>
          <Ionicons name="person-outline" size={20} color="#1262AE"/>
        </View>
        <Text style={{fontSize: 16, fontWeight: "500"}}>Referal Code</Text>
        <View style={{backgroundColor: "#32D4AD", marginLeft: 15, paddingHorizontal: 5, borderRadius: 5}}>
          <Text style={{color: "white",fontSize: 13, fontWeight: "500"}}>New</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{display: "flex", flexDirection: "row", alignItems: "center",marginVertical: 10}}>
        <View style={{padding: 5, backgroundColor: "#F1F7FD", marginRight: 15}}>
          <Ionicons name="settings-outline" size={20} color="#1262AE"/>
        </View>
        <Text style={{fontSize: 16, fontWeight: "500"}}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: "flex", flexDirection: "row", alignItems: "center",marginVertical: 10}}>
        <View style={{padding: 5, backgroundColor: "#F1F7FD", marginRight: 15}}>
          <AntDesign name="logout" size={20} color="#1262AE"/>
        </View>
        <Text style={{fontSize: 16, fontWeight: "500"}}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: "#EAF5FF", paddingVertical: 10, display: "flex",flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
        <AntDesign name="questioncircleo" size={20} color="#1262AE"/>
        <Text style={{marginLeft: 15,color: "#1262AE"}}>
          Have questions? we're here to help
        </Text>
      </TouchableOpacity>
      </ScrollView>
     </View>
     <Dialog.Container visible={visible}>
        <Dialog.Description>
          this button takes you to the edit profile screen
        </Dialog.Description>
        <Dialog.Button
          color="#1262AE"
          label="ok"
          onPress={() => setVisible(false)}
        />
      </Dialog.Container>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#ebebeb',
 }})