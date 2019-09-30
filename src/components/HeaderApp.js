import React, { Component } from 'react';
import { Button, Icon, Title, } from 'native-base';
import { Dimensions, View, Text, Animated, Easing, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
export default class HeaderApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateZ: new Animated.Value(0)
    };
  }
  rotateZ_() {
    this.state.rotateZ.setValue(0)
    Animated.timing(
      // Animate value over time
      this.state.rotateZ, // The value to drive
      {
        toValue: 1, // Animate to final value of 1
        duration: 500,
        easing: Easing.linear
      },
    ).start(); // Start the animation
  }
  render() {
    const spin = this.state.rotateZ.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const scale = this.state.rotateZ.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.5, 1]
    })
    return (
      <View style={styles.container}>
        {this.props.back ? 
          (
            <View>
              <TouchableWithoutFeedback
                style={styles.buttonBack}
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name='ios-arrow-back' size={25} />
                {/* <Text style={styles.textBack}>Back</Text> */}
              </TouchableWithoutFeedback>
            </View>
          ) 
          : 
          (
            <View>
              <Icon name='ios-arrow-back' size={25} style={{ color: '#FFF' }} />
            </View>
          )
        }
        <Text style={styles.title}>
          {this.props.title}
        </Text>
        <Animated.View
          style={{ transform: [{ rotateZ: spin }, { scale }], padding: 0, margin: 0, }}
        >
          <TouchableWithoutFeedback
            style={styles.buttonBack}
            transparent
            onPress={() => {
              this.rotateZ_();
              this.props.navigation.toggleDrawer()
            }}
          >
            <Icon name='menu' size={25} />
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    width,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    overflow: 'hidden'
  },
  buttonBack: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textBack: { marginLeft: 10, fontSize: 16, fontWeight: 'bold' }
})