import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
const { width, height } = Dimensions.get('window')
export default class SlideImage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { id: 1, back: 'red' },
            { id: 2, back: 'yellow' },
            { id: 3, back: 'blue' },
            { id: 4, back: 'pink' },
         ]
      };
   }
   _renderItem({ item, index }, parallaxProps) {
      return (
         <View style={styles.item}>
            <ParallaxImage
               source={{ uri: 'https://media.gettyimages.com/photos/arch-bridge-in-kromlau-picture-id539121576?s=612x612' }}
               containerStyle={styles.imageContainer}
               style={styles.image}
               parallaxFactor={0.4}
               {...parallaxProps}
            />
         </View>
      );
   }
   render() {
      return (
            <Carousel
               ref={(c) => { this._carousel = c; }}
               data={this.state.data}
               renderItem={this._renderItem}
               sliderWidth={width}
               itemWidth={width - 60}
               hasParallaxImages={true}
            />
      );
   }
}

const styles = StyleSheet.create({
   item: {
      width: width - 60,
      height: '100%',
   },
   imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderRadius: 8,
   },
   image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
   },
})
