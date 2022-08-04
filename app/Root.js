import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import SplashScreen from './SplashScreen';
import ContactScreen from './Contactscreen';
import TabScreen1 from './TabScreen1';
import TabScreen2 from './TabScreen2';
import SignIn from './SigninScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerSidebarScreen(props) {
  return (
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: 'blue', height: 100}}></View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>    
  );
}

function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="Home" component={HomeTabs} 
        options={{
                               title: 'Home',
                                 drawerIcon: () => (
                                     <Image
                                         source={require("../home.png")}
                                         style={{height:'90%' , width:'15%'}}
                                     />
                                 )
                             }}
                            
      />
      <Drawer.Screen name="Contact Us" component={ContactScreen}
       options={{
        title: 'like',
          drawerIcon: () => (
              <Image
                  source={require("../like.png")}
                  style={{height:'90%' , width:'15%'}}
              />
          )
      }}

      
      />
       <Drawer.Screen name="Contact1" component={ContactScreen}
       options={{
        title: 'saved',
          drawerIcon: () => (
              <Image
                  source={require("../save.png")}
                  style={{height:'90%' , width:'15%'}}
              />
          )
      }}

      
      />
             <Drawer.Screen name="Contact2" component={ContactScreen}
       options={{
        title: 'Favourite',
          drawerIcon: () => (
              <Image
                  source={require("../fav.png")}
                  style={{height:'110%' , width:'15%'}}
              />
          )
      }}

      
      />
  
  
    </Drawer.Navigator>
  );
}

function HomeTabs({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        title: 'Hello',
        style:{height:40, paddingBottom: 10}
      }}
    >
      <Tab.Screen name="Tab-1" component={TabScreen1}  options={{
            title: 'Bollywood',
            headerShown: false,   
            tabBarIcon: () => (
                <Image source={require('../Incamera.png')} style={{ height: 20, width: 20 }} />
            )
          }}          
     />
      <Tab.Screen name="Tab-2" component={TabScreen2} options={{
            title: 'Hollywood',
            headerShown: false,
            tabBarIcon: () => (
                <Image source={require('../aCamera.jpg')} style={{ height: 20, width: 20 }} />
            )
            

          }}          
      />
       </Tab.Navigator>
  );
}

function Root({ navigation }) {
  let initialRoute = 'Splash';  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute} headerMode="screen">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{
            title: '',
            headerShown: false   

          }}          
        />

        <Stack.Screen 
          name="SignIn" 
          component={SignIn} 
          options={{
            title: '',
            headerShown: false   

          }}          
        />

        <Stack.Screen 
          name="Drawer" 
          component={MyDrawer} 
          options={{
            title: '',
            headerShown: false          
          }}          
        />
        
        <Stack.Screen name="Home" component={HomeTabs} 
          options={{
            title: '',
            headerShown: false 
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Root;
