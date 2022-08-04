import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet,View,ScrollView,Text, ImageBackground } from 'react-native';
import { loadProduct } from './actions';
import productReducer from './reducers/bookReducer';


class ProductApp extends React.Component {
Loading=()=>{
    this.props.dispatchLoading(this.state);
}
    render() {
        const { products } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>BollyWood Movies</Text>

                <ScrollView style={styles.BooksContainer}>
                    {
                        products.map((products, index) => (
                            <View style={styles.book} key={index}>
                                <View ><ImageBackground
                                style={{height:120,width:100}}
                                source={{uri:products.imageUrl}}/>
                                </View>
                                <View style={{padding:5}}>
                                <Text style={styles.name}>ID={products._id}</Text>
                                <Text style={styles.name}>Movie={products.name}</Text>
                                <Text style={styles.name}>Certificate={products.certificate}</Text>
                                <Text style={styles.name}>Director={products.director}</Text>
                                <Text style={styles.name}>Imdb Points={products.imdbRating}</Text>
                                </View>
  
                              
                               
                                 </View>
                        ))
                    }
                </ScrollView>

               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    
    },
    title: {
        paddingTop: 30,
        paddingBootom: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        height: 44,
        padding: 7,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadious: 10,
        flex: 1,
        marginBottom: 5
    },
    BooksContainer: {
        borderWidth: 1,
        borderTopColor: 'green',
        flex: 1
    },
    addButton: {
        fontSize: 28,
        lineHeight: 28
    },
    addButtonContainer: {
        width: 80,
        height: 80,
        backgroundColor: 'pink',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    book: {
        padding: 5,
        flexDirection:'row'
    },
    name: {
        fontSize: 18
    },
    author: {
        fontSize: 14,
        color: 'pink'
    },
    inputContainer: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderTopColor: 'grey',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100
    }

})

const mapDispatchToProps = {
    dispatchLoading:(products)=>loadProduct(products)
}

const mapStateToProps = (state) => ({
    products: state.productReducer.products
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductApp);