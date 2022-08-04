import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
export default function Notification({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                onPress={() => navigation.openDrawer()} title="Open Drawer" />

           </View>
    )
   }
