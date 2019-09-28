import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './Home/Home';
import ProductDetail from './ProductDetail/ProductDetail';
import { createAppContainer } from "react-navigation";
const { width, height } = Dimensions.get('window')
const stackRouter = createStackNavigator({
        Home,
        ProductDetail,                        
    },
    {
        defaultNavigationOptions: ({ props }) => ({
            headerBackImage: null,
        }),
    }
)
const DrawerApp = createDrawerNavigator({
    Home: {
      screen: stackRouter,
    },
  },
  {
    drawerWidth: width * 0.8
  });
const Router = createAppContainer(DrawerApp);
export default Router;