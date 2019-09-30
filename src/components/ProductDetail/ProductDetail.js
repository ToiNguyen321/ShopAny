import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, } from 'react-native';
import HeaderApp from './../HeaderApp';
import { ScrollView, FlatList, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';
import SlideImage from './SlideImage';
import Product from '../Home/Product';


const htmlContent = `
    <h1 style="font-size: 16">Women's Running Shoe</h1>
	 <p style="font-size: 14; color: #17181A">The Nike Joyride Run Flyknit is designed to help make running feel easier and give your legs a day off. Tiny foam beads underfoot conform to your foot for cushioning that stands up to your mileage.<br/><br/>• Shown: Cinnabar/Crimson Tint/Aurora/Blue Force<br/>• Style: AQ2731-600<br/>
	 </p>
`;

export default class ProductDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}
	componentDidMount() {

	}
	render() {
		return (
			<View style={styles.fill}>
				<HeaderApp title={this.props.navigation.getParam('title', 'Product')} navigation={this.props.navigation} back={true} />
				<ScrollView
					style={styles.fill}
				>
					<View style={[styles.slideImage, styles.marginBottom]}>
						<SlideImage />
					</View>
					<View style={[styles.container, styles.marginBottom]}>
						<Text style={[styles.textPrice, styles.marginBottom]}>
							$180
						</Text>
						<Text style={[styles.textName, styles.marginBottom]}>
							NIKE JOYRIDE RUN FLYKNIT
						</Text>
						<View style={[styles.viewColor, styles.marginBottom]}>
							{
								new Array(0, 5).map((item, index) => (
									<View key={`${index}`} style={styles.dotColor}></View>
								))
							}
						</View>
					</View>
					<FlatList
						style={[styles.marginBottom]}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						data={[{ size: 38 }, { size: 39 }, { size: 41 }, { size: 43 },]}
						keyExtractor={(item, index) => `${index}`}
						renderItem={({ item, index }) =>
							<TouchableNativeFeedback
								style={[styles.buttonSize, { marginRight: index === 3 ? 20 : 0 }]}
							>
								<Text>{item.size}</Text>
							</TouchableNativeFeedback>
						}
					/>
					<View style={[styles.container, { paddingBottom: 30, borderBottomWidth: 1.5, borderBottomColor: '#E6E6E6' }]}>
						<HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
						<TouchableOpacity
							style={styles.buttonAddCart}
						>
							<Text style={styles.textButtonAddCart}>
								ADD TO CARD
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.marginBottom}>
						<Text style={[styles.textProductLike, styles.container, styles.marginTop, styles.marginBottom]}>YOU MIGHT ALSO LIKE</Text>
						<FlatList
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							data={[{ size: 38 }, { size: 39 }, { size: 41 }, { size: 43 },]}
							keyExtractor={(item, index) => `${index}`}
							renderItem={({ item, index }) => <Product from={'productDetail'} item={item} navigation={this.props.navigation} />
							}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fill: {
		flex: 1
	},
	marginBottom: {
		marginBottom: 15,
	},
	marginTop: {
		marginTop: 30,
	},
	slideImage: {
		height: 250,
		paddingTop: 20
	},
	container: {
		paddingHorizontal: 20,
	},
	textPrice: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#17181A',
	},
	textName: {
		fontSize: 24,
		textTransform: "uppercase",
		color: '#17181A',
		opacity: 0.5,
	},
	viewColor: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	dotColor: {
		marginRight: 15,
		width: 15,
		height: 15,
		borderRadius: 7,
		backgroundColor: 'red'
	},
	buttonSize: {
		borderWidth: 1.5,
		borderColor: '#E6E6E6',
		width: 100,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 20,
		borderRadius: 5,
	},
	buttonAddCart: {
		backgroundColor: 'black',
		width: '100%',
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	textButtonAddCart: {
		fontSize: 18,
		color: '#FFF',
		fontWeight: 'bold'
	},
	textProductLike: {
		fontSize: 20,
		color: 'black',
	}

})