import React, { Component } from 'react'
import { Text, View ,Image,ScrollView,Dimensions, StyleSheet, Button} from 'react-native'
import MovieApp1 from '../Redux copy/MovieApp1';

const {width}=Dimensions.get("window");
const height=width*0.6;
const images = [
        'https://phando021.s.llnwi.net/public/upload/news/story_mul_image_1612863575_0.jpg',
         'https://c4.wallpaperflare.com/wallpaper/726/46/535/movies-hollywood-movies-wallpaper-preview.jpg',
        'https://mallstuffs.com/Blogs/BlogImages/2014/55-Funny-hollywood-movie-titles-in-bhojpuri-that-will-blow-your-mind26.png',
        'https://i.ytimg.com/vi/J1VHErHCTww/maxresdefault.jpg',
        'https://pbs.twimg.com/media/DNjrirFVwAEaZQm?format=jpg&name=900x900',   
      
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
    <MovieApp1/>
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

