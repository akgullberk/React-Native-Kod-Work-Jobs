import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Jobs,Details} from "../screens";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
            
            <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown: false}} />
            <Stack.Screen name="Details" component={Details} options={{
                headerTitleAlign: 'left',
                headerTitleStyle: {
                    color: '#ef5350'

                },
                
                headerTitleAlign: 'center',
            }} />

            
        </Stack.Navigator>
    )
}

export default Navigation