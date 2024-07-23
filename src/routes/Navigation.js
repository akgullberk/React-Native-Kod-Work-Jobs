import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Jobs,Details} from "../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Jobs" component={Jobs} options={{
                headerTitleStyle: {
                    color: '#ef5350'

                },
                headerTitleAlign: 'center',
            }
                
            }/>
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