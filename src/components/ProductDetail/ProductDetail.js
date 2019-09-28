import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';

export default class ProductDetail extends Component {
    static navigationOptions = ({navigation}) => ({
		headerLeft: (
			<Button
				transparent
				onPress={() => navigation.goBack()}
			>
				<Icon name='ios-arrow-back' size={25} />
                <Text>Back</Text>
			</Button>
		),
		headerTitleStyle: {
			textAlign: 'center',
			flexGrow:1,
			alignSelf:'center',
		},
		headerTitle: 'Product',
		headerRight: (
			<Button
				transparent
				onPress={() => navigation.toggleDrawer()}
			>
				<Icon name='menu' size={25} />
			</Button>
		),
	});
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> ProductDetail </Text>
      </View>
    );
  }
}
