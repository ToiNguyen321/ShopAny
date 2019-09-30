import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from "react-native-web-swiper";

export default class SildeHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Swiper
          from={0}
          loop
          timeout={15}
          controlsProps={{
            dotsTouchable: false,
            prevPos: 'left',
            nextPos: 'right',
            nextTitle: '>',
            nextTitleStyle: null,
            cellsContent: {
              'bottom-right': (<Text>SHOP ANY</Text>),
            },
            NextComponent: ({ onPress }) => null,
            PrevComponent: ({ onPress }) => null
          }}
        >
          <View key={'1'} style={styles.slide1}>
            <Text>Slide 1</Text>
          </View>
          <View key={'2'} style={styles.slide2}>
            <Text>Slide 2</Text>
          </View>
          <View key={'3'} style={styles.slide3}>
            <Text>Slide 3</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e91e63',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#673ab7',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f51b5',
  },

})
