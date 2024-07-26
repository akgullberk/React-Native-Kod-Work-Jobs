import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Jobs, Favourites } from '../screens';
import Navigation from './Navigation';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={{tabBarIcon: () => null,tabBarLabelStyle: {
        fontSize: 16, // Yazı boyutu
        marginBottom: 13, // Yazının alt boşluğu
        color: '#ef5350'
      },}}>
        <Tab.Screen name="Jobs" component={Jobs} options={{
                headerTitleStyle: {
                    color: '#ef5350'

                },
                headerTitleAlign: 'center',
            }} />
        <Tab.Screen name="Favourites" component={Favourites} options={{
                headerTitleStyle: {
                    color: '#ef5350'

                },
                headerTitleAlign: 'center',
            }} />
      </Tab.Navigator>
    );
  };
  
  export default TabNavigator;