import React, { Component } from 'react'
import { Text, View ,Image,ScrollView,Dimensions, StyleSheet, Button} from 'react-native'
import MovieApp from '../Redux/MovieApp';
const {width}=Dimensions.get("window");
const height=width*0.6;

const images = [
    'https://www.iwmbuzz.com/wp-content/uploads/2021/06/trailer-review-of-haseen-dillruba-lurid-sleazy-taapsee-pannu-enters-the-pulp-fiction-universe.jpg',
   'https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2022/01/29/new_project_4_0.png?itok=sys8ri3C',
       'https://image.songsuno.com/movie-images/original/movie/pagalpanti/pagalpanti-poster-image.jpg',
        'https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/cf5210abeea454251040e29aad5ef1fe.jpg',
         'https://www.india.com/wp-content/uploads/2018/10/pjimage-13-7.jpg',

     ]

export default class TabScreen1 extends React.Component {
    state={
        activeColor:0
    }
    change=({nativeEvent})=>{
        const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
        if(slide!==this.state.activeColor)
        {
            this.setState({activeColor:slide});
        }
    }
  render() {
    return (
    
        <View style={styles.container}>
               <ScrollView 
               pagingEnabled
               onScroll={this.change}
               showsHorizontalScrollIndicator={false} 
               horizontal style={{flex:1}}
               >
     
        {

       images.map((image, index) => (
           <Image
               key={index}
               source={{ uri: image }}
               style={styles.image}
           />

       ))
   }
   </ScrollView>
   <View style={{flex:2}}>
    <MovieApp/>
    </View>
   
   </View>
   

        )
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width, height, resizeMode: 'cover'
    },
    dotting:{flexDirection:'row',position:'absolute',bottom:0,alignSelf:'center'},
    dotting1:{flexDirection:'row',position:'absolute',bottom:0,alignSelf:'center',height:10,width:10},
  
    dotcolor:{
        color:'#888',
        margin:3.5
    },
    Activedotcolor:{
        color:'#fff',
        margin:3.5
    }

})

