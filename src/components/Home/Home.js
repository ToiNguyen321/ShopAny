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
	_onScrollEnd = ({contentOffset, contentSize}) => {
		if (parseInt(contentOffset.y) >= parseInt(contentSize.height - 700)) {
			if (this.state.loadDataPage === true) {
				this.setState({
					loadDataPage: false,
				})
				console.log(contentOffset.y, parseInt(contentSize.height - 700))
				console.log('Load', this.state.data.length)
				setTimeout(() => this.setState({
					data: this.state.data.concat([
						{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }])
					,
					loadDataPage: true
				}), 1000)
			}
		}
	}

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
			<View style={styles.fill}>
				<HeaderApp title="Shop Any" navigation={ this.props.navigation }/>
				<ScrollView
					scrollEventThrottle={10}
					onScroll={({ nativeEvent }) => this._onScrollEnd(nativeEvent)}
				>
					<View style={[styles.viewSlide, { }]}>
						<SildeHome />
					</View>
					<View>
						<FlatList
							contentContainerStyle={styles.contentSizeFlatList}
							scrollEventThrottle={10}
							data={this.state.data}
							renderItem={({ item }) => <Product item={item} navigation={this.props.navigation}/>}
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
	fill: {
		flex: 1,
	},
	viewHeader: {
		width,
		height: 50
	},
	viewSlide: {
		width,
		height: SLIDER_MAX_HEIGHT,
	},
	contentSizeFlatList: { 
		padding: 10, 
		paddingBottom: 0 }
})
