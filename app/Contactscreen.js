import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

let openDrawerMenu = () => { 
  
  navigation.openDrawer();
}

export default function ContactScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
         <Text>menu</Text>
           </TouchableOpacity>
        <View style={styles.headerInnerBlock}>
            <View style={styles.headerTitleBlock}>
              <Text style={styles.headerTitle}>Contact Us</Text>
            </View>
        </View>
      </View>
      <View style={styles.bodyContent}>
        <Text>Contact Screen!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff',
  },
  bodyContent: {
    flex: 1, backgroundColor: '#C6C6C6', justifyContent: 'center', alignItems: 'center'
  },
  headerBlock: {
    alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'blue', flexDirection: 'row', paddingLeft: 20, paddingRight: 20
  },
  headerInnerBlock: {
    alignItems: 'flex-start', justifyContent: 'space-around', flexDirection: 'row', paddingTop: 15, paddingBottom: 15, width: '80%'
  },
  headerTitleBlock: {
    borderBottomWidth: 0, width: 150, alignItems: 'center', justifyContent: 'flex-end'
  },
  headerTitle: {
    marginBottom: 2, color: '#fff', fontSize: 18, fontWeight: 'bold', fontStyle: 'italic'
  },
});