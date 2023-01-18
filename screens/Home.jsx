import { View, Text, Dimensions,Image,TouchableOpacity, StatusBar, StyleSheet,  ScrollView, ImageBackground } from "react-native";
import  React, { useState, useEffect } from "react";
import EvillIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Trending } from "../components/Trending";
import { images } from "../components/data";
import Dialog from "react-native-dialog"
import axios from "axios"



export default function Home() {
   const [temp, setTemp] = useState(null)
   const [visible, setVisible] = useState(false)
   const [visible1, setVisible1] = useState(false)

   const fetchTemp = async()=>{
    try{
      const res = await axios.get("https://api.weatherapi.com/v1/current.json?key=bea5040ff3e447e4ac1122158231801&q=Paris&aqi=no")
      setTemp(res.data.current.temp_c)
    }catch(err){
      console.log(err)
    }
   }

   useEffect(()=>{
    fetchTemp()
   },[])

 return (
  <View style={styles.container}>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="white"
      hidden={false}
      translucent={true}
    />
    <View style={styles.header}>
      <TouchableOpacity style={{paddingVertical:10}} onPress={()=>setVisible(true)}>
        <EvillIcons name="navicon" size={30}/>
      </TouchableOpacity>
      <MaskedView
         maskElement={<Text style={{textAlign: "center",fontWeight: "bold",fontSize: 30}}>FickleFlight</Text>}>
        <LinearGradient
         style={styles.logo}
         locations={[0, 1]}
         colors={["#299BD8", "#1262AF"]}
         start={{ x: 0, y: 0 }}
         end={{ x: 1, y: 0 }}
       />
      </MaskedView>
      <View style={{position: "relative"}}>
        <View style={{height: 36, width: 36, borderRadius:18, overflow: "hidden"}}>
          <Image
           style={{ width: "100%", height: "100%" }}
           source={require("../assets/avatar.png")}
           alt=""
          />
        </View>
        <View style={{height: 10, width: 10, borderRadius: 5, backgroundColor:'#FFA007',position: "absolute", zIndex: 999, right:-1, top: -1}}></View>
      </View>
    </View>

    <ScrollView keyboardShouldPersistTaps="always">
      <View style={{height:Dimensions.get("window").height * 0.25,overflow: "hidden", margin: "5%", borderRadius: 10}}>
        <ImageBackground source={require('../assets/paris.jpg')} style={{height: "100%", height:"100%",display:"flex", justifyContent:"space-between"}}>
          <View style={{padding: 10, display: "flex", width:"100%", alignItems:"flex-end"}}>
            <TouchableOpacity>
              <EvillIcons name="heart" color="white" size={30}/>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{alignItems: "flex-end",justifyContent: "flex-end", paddingHorizontal: 10,}}>
              <Text style={{color: "#ffffff", fontWeight:"400",fontStyle: "Baloo Bhai 2", fontSize: 14}}>FROM</Text> 
            </View>
            <View style={{paddingHorizontal: 10,paddingBottom: 5, display: "flex", flexDirection: "row",alignItems:"flex-start", justifyContent: "space-between"}}>
              <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Text style={{color: "#ffffff",fontFamily: "Baloo-Bhai-2", fontSize: 28}}>Paris</Text>
                <Text style={{marginLeft:10, color: "#ffffff", fontWeight:"700", fontSize: 28}}> {temp}  </Text>
                <MaterialCommunityIcons name="weather-partly-rainy" color="white" size={25} style={{marginLeft: -10}}/>
              </View>
              <Text style={{color: "#ffffff",fontFamily: "Baloo-Bhai-2", fontSize: 32}}>$1299</Text> 
            </View>
          </View>
        </ImageBackground> 
      </View>

     <View style={{paddingHorizontal: "5%"}}>
       <Text style={{fontSize: 16, fontWeight: "700"}}>Upcoming Flight</Text>
        <View style={{backgroundColor: "#ffffff", padding: 10, marginVertical: 10, borderRadius: 10}}>
          <View style={{display: 'flex', flexDirection: "row", alignItems: "center", gap: 20}}>
            <View style={{flex: 1}}>
              <Text style={{color: "#1262AE", fontSize: 20, fontFamily: "Inter-700"}}>SIN</Text>
              <Text style={{fontSize: 14, fontWeight: "400"}}>Singaphore</Text>
            </View>
          <View style={{flex: 1.5, alignItems: "center", flexDirection:"row",justifyContent: "space-between"}}>
            <View style={{position:"absolute", height: 1,width:"100%", borderRadius: 1, borderWidth: 1, borderColor: '#CACACA', borderStyle: 'dashed',alignItems: "center", zIndex: 0, }}>
              <View style={{ left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
            </View>
            <View style={{height: 8,borderWidth: 1, borderColor:"#1262AE", width: 8, borderRadius: 4, backgroundColor: "#ffffff"}}></View>
            <View style={{height:40, width: 40, borderRadius: 20, backgroundColor: "#ECF2F9", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <View style={{height:32, width: 32, borderRadius: 16, backgroundColor: "#D6E4F2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <View style={{height:22, width: 22, borderRadius: 11, backgroundColor: "#1262AE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Ionicons name='airplane' size={15} color="#ffffff"/>
                </View>
              </View>
            </View>
            <View style={{height: 8,borderWidth: 1, borderColor:"#1262AE", width: 8, borderRadius: 4, backgroundColor: "#ffffff"}}></View>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{color: "#1262AE", fontSize: 20, fontFamily: "Inter-700"}}>LAX</Text>
            <Text style={{fontSize: 14, fontWeight: "400"}}>Los angelos</Text>
          </View>
        </View>
        <View style={{borderBottomWidth: 1, borderBottomColor: "#F5F6F8",marginVertical: 10}}>

        </View>
        <View style={{display: "flex", flexDirection: "row", justifyContent:"space-between", alignItems: "center"}}>
          <Text style={{fontSize: 15, fontWeight: "400", color: "#7E8B97"}}>Depart on: 1 may, 8:00 am</Text>
          <Text style={{fontSize: 15, fontWeight: "400", color: "#7E8B97"}}>
            <Text style={{fontWeight: "700"}}>4 days </Text>
             to go
          </Text>
        </View>
      </View>
     </View>

     <View style={{padding: "5%"}}>
       <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
         <Text style={{fontSize: 16, fontWeight: "700"}}>Trending Destination</Text>
         <TouchableOpacity onPress={()=>setVisible1(true)}>
           <Text style={{color: "#1262AE"}}>See all</Text>
         </TouchableOpacity>
       </View>
       <View style={{display: "flex", flexDirection: "row"}}>
         <ScrollView
           showsHorizontalScrollIndicator={false}
           horizontal={true}
         >
          <View style={{display: "flex", flexDirection: "row"}}>
            <Trending
             img={images[0]}
             title="Boracay"
             from="Phillippines"
             detail="5D4N"
            />
            <Trending
              img={images[1]}
              title="Boracay"
              from="Phillippines"
              detail="5D4N"
            />
            <Trending
              img={images[1]}
              title="Boracay"
              from="Phillippines"
              detail="5D4N"
            />
            <Trending
              img={images[1]}
              title="Boracay"
              from="Phillippines"
              detail="5D4N"
            />
          </View>
         </ScrollView>
       </View>
     </View>
     </ScrollView>

     <Dialog.Container visible={visible}>
        <Dialog.Description>
          this button show the menu bar
        </Dialog.Description>
        <Dialog.Button
          color="#1262AE"
          label="ok"
          onPress={() => setVisible(false)}
        />
      </Dialog.Container>

      <Dialog.Container visible={visible1}>
        <Dialog.Description>
          this button takes you to the tranding screen
        </Dialog.Description>
        <Dialog.Button
          color="#1262AE"
          label="ok"
          onPress={() => setVisible1(false)}
        />
      </Dialog.Container>

  </View>
 )
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#ebebeb',
 },
 header: {
  width: "100%",
  paddingTop: "10%",
  paddingVertical: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#ffffff",
  paddingHorizontal: "5%"
 },
 logo: {
  flex: 1,
  padding: 10,
  height:50, 
  width:200, 
  fontWeight: "bold", 
  fontSize: 20 }


})