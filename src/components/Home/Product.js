import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { id } = this.props.item
    return (
       <View style={{ flex: 1, paddingRight: 5, paddingLeft: 5, marginBottom: 20}}>
         <View style={styles.viewImage}>
           <Image 
            source={{uri: 'https://shopgiaythethaogiare.com/wp-content/uploads/2019/04/Giay-Alexander-Mcqueen-Bac-Gia-Re.jpg'}}
            style={styles.imageStyle}
          />
         </View>
         <Text style={ styles.title }>Nike Joyride Run Flyknit</Text>
         <Text style={ styles.price }>$180</Text>
       </View>
      
    );
  }
}
const styles = StyleSheet.create({
  viewImage: {
    width: (width - 40) / 2 ,
    height: (width - 40) / 2,
    justifyContent: 'center'
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  },
  title: {
    paddingTop: 10,
    color: '#17181A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#17181A',
    opacity: 0.2,

  }
})