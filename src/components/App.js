import React, { Component } from 'react';
import Router from './Router';
import { View } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Router />
      </View>
    );
  }
}
