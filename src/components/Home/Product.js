import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {item, from} = this.props;
    const { id } = item
    return (
       <View style={[styles.container, from === 'productDetail' ? styles.containerProductDetail : null] }>
         <TouchableWithoutFeedback
          onPress={()=>this.props.navigation.navigate('ProductDetail', {title: 'Giày lười', id: id})}
         >
            <View style={[styles.viewImage, from === 'productDetail' ? styles.viewImageProductDetail : null ]}>
              <Image 
                source={{uri: 'https://shopgiaythethaogiare.com/wp-content/uploads/2019/04/Giay-Alexander-Mcqueen-Bac-Gia-Re.jpg'}}
                style={styles.imageStyle}
                />
            </View>
            <Text style={[styles.title,  from === 'productDetail' ? styles.titleProductDetail : null] }>Nike Joyride Run Flyknit</Text>
            <Text style={ styles.price }>$180</Text>
          </TouchableWithoutFeedback>
       </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    marginRight: 7, 
    marginLeft: 7, 
    marginBottom: 20,
  },
  containerProductDetail: {
    marginLeft: 20,
    marginRight: 0,
  },
  viewImage: {
    width: (width - 40) / 2 ,
    height: (width - 40) / 2,
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
  viewImageProductDetail: {
    width: (width - 80) / 2 ,
    height: (width - 80) / 2,
  },
  imageStyle: {
    width: '98%',
    height: '98%',
    borderRadius: 5,
  },
  title: {
    paddingTop: 10,
    color: '#17181A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleProductDetail: {
    fontSize: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#17181A',
    opacity: 0.2,

  }
})