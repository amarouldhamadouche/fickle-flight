import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react"
import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './screens/Home';
import Profile from './screens/Profile'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import 'react-native-gesture-handler';
import { DefaultTheme,Provider } from 'react-native-paper';
import Booking from './screens/Booking';
import Search from './screens/Search';
import {loadAsync} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

const Tab = createMaterialBottomTabNavigator()

function Index() {

  const [fontsLoaded, setFontLoaded] = useState(false)
  const fontsLoad = async ()=>{
    await loadAsync({
      'Baloo-Bhai-2': require('./assets/fonts/BalooBhai2-Bold.ttf'),
      'Inter-700': require('./assets/fonts/SourceSansPro-Bold.ttf'),
      'Inter-600': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
      'Inter-400': require('./assets/fonts/SourceSansPro-Regular.ttf'),
      'Inter-500': require('./assets/fonts/Roboto-Medium.ttf')
    });
    setFontLoaded(true)
  } 

  useEffect(()=>{
    fontsLoad()
  },[])
  
  return (
    fontsLoaded ? (
      <NavigationContainer style={styles.container}>
        <StatusBar hidden={false} />
        <Tab.Navigator labeled={true} barStyle={{ backgroundColor: 'white', paddingBottom: 0}} activebackgroundColor="white" inactiveColor="#7E8B97" activeColor="#1A6EB4">
          <Tab.Screen name="Explore" component={Home}            
            options={{
              tabBarIcon: ({ color, size }) => (
               <MaterialIcons name="shopping-bag" color={color} size={26}/>
              )
            }}/>
 
          <Tab.Screen name="Booking" component={Booking}            
            options={{
              tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map-marker" color={color} size={26}/>
              )
           }}/>
 
          <Tab.Screen name="Search" component={Search}            
            options={{
              tabBarIcon: ({ color, size }) => (
               <FontAwesome5 name="plane" color={color} size={26}/>
              )
            }}/>
 
          <Tab.Screen name="Profile" component={Profile}            
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="person" color={color} size={26}/>
            ),
          }}/>
        </Tab.Navigator> 
      </NavigationContainer>
    ) : (
      <Booking/>
    )
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'transparent', // Use transparent to disable the little highlighting oval
  },
};

export default function App (){
  return (
    <Provider theme={theme}>
      <Index/>
    </Provider>
  )
}
