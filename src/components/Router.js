import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from "react-navigation";
import { TabBar } from "react-native-animated-nav-tab-bar";

import Home from './Home/Home';
import ProductDetail from './ProductDetail/ProductDetail';

import Cart from './Cart/Cart';

const { width, height } = Dimensions.get('window')
const stackRouterHome = createStackNavigator({
  Home,
  ProductDetail,
},
  {
    defaultNavigationOptions: ({ props }) => ({
      headerBackImage: null,
      header: null
    }),
    initialRouteName: 'Home'
  }
)

const tabBottom = createBottomTabNavigator({
  Home: {
    screen: stackRouterHome,
  },
  Cart: {
    screen: Cart
  },
  Cart2: {
    screen: Cart
  },
  Cart3: {
    screen: Cart
  },
  Profile: {
    screen: Cart
  }
},
{
  tabBarOptions:{
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#f5f5f5'
    },
    showLabel: false,
    keyboardHidesTabBar : true,
  },
  backBehavior: 'none',
  
  // tabBarComponent: props => <TabBar
  //     activeColors={'white'} // or activeColors={'#e6b580'}
  //     activeTabBackgrounds={'black'} // or activeTabBackgrounds={'#ede7e6'}
  //     // verticalPadding={1}
  //     {...props}
  // />,
  defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let tabName;
          switch(routeName){
            case 'Home': 
              tabName = 'home';
              break;
            case 'Cart': 
              tabName = 'shopping-cart';
              break;
            case 'Profile': 
              tabName = 'shopping-cart';
              break;
          }
          return <Icon 
            name={tabName} 
            size={5} 
            type={'FontAwesome'} 
            color={tintColor}
            style={{ color: tintColor}}
            />
      }
  })
}
)

const DrawerApp = createDrawerNavigator({
  Home: {
    screen: tabBottom,
  }
},
  {
    drawerWidth: width * 0.8
  });
const Router = createAppContainer(DrawerApp);
export default Router;