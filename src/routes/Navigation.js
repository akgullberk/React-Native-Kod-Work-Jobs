import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Jobs,Details,Favourites} from "../screens";

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

            <Stack.Screen name="Favourites" component={Favourites} />
        </Stack.Navigator>
        
    )
}

export default Navigation