import React, { Component } from 'react';
import { View, Text, Dimensions, Platform, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Icon } from "native-base";
import SildeHome from './SildeHome';
import Product from './Product';
import HeaderApp from './../HeaderApp';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");
const SLIDER_MAX_HEIGHT = 200;
const SLIDER_MIN_HEIGHT = 0;
const SLIDER_SCROLL_DISTANCE = SLIDER_MAX_HEIGHT - SLIDER_MIN_HEIGHT;
export default class Home extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerTitleStyle: {
			textAlign: 'center',
			flexGrow: 1,
			alignSelf: 'center',
		},
		headerTitle: 'Home',
		headerLeft: (<View></View>),
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
			loadDataPage: true,
			data: [
				{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 15 },
			]
		}
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView
					scrollEventThrottle={10}
					onScroll={({ nativeEvent }) => {
						if (parseInt(nativeEvent.contentOffset.y) >= parseInt(nativeEvent.contentSize.height - 700)) {
							if (this.state.loadDataPage === true) {
								this.setState({
									loadDataPage: false,
								})
								console.log(nativeEvent.contentOffset.y, parseInt(nativeEvent.contentSize.height - 700))
								console.log('Loadthem', this.state.data.length)
								setTimeout(() => this.setState({
									data: this.state.data.concat([
										{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }])
									,
									loadDataPage: true
								}), 1000)
							}
						}
					}}
				>
					<View style={[styles.viewSilde, { }]}>
						<SildeHome />
					</View>
					<View>
						<FlatList
							onContentSizeChange={(contentWidth, contentHeight) => {
								console.log(contentHeight)
							}}
							contentContainerStyle={{ padding: 10, paddingBottom: 0 }}
							scrollEventThrottle={10}
							data={this.state.data}
							renderItem={({ item }) => <Product item={item} />}
							numColumns={2}
							keyExtractor={(item, index) => `${index}`}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewHeader: {
		width,
		height: 50
	},
	viewSilde: {
		width,
		height: SLIDER_MAX_HEIGHT,
	}
})
