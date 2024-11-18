import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
//import LinearGradient from "react-native-linear-gradient";
import { home, scanner, trasportation, workorder } from "../screens"
import { COLORS, FONTS, icons } from "../constants"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
const Tab = createBottomTabNavigator()



const Tabs = () => {
    return (
        <Tab.Navigator 
            screenOptions={{
                showLabel: false,
            }}
            activeColor="#b85602"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: '#fce9d2'}}
        >
            <Tab.Screen
                name="Home"
                component={home}
                
                options={{
                    tabBarLabel: 'Home',
                    headerShown:false,
                    tabBarIcon: ({focused}) =>(
                        <View style={{ alignItems: 'center', alignContent: 'center'}}>
                           <MaterialCommunityIcons name="home" color={focused ? COLORS.primary: COLORS.black} size={26} />
                           
                        </View>
                    )
                }}
            />
            
            <Tab.Screen
                name="OT"
                component={workorder}
                options={{
                    headerShown:false,
                    tabBarLabel: 'OT',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', alignContent: 'center'}}>
                           <MaterialCommunityIcons name="newspaper" color={focused ? COLORS.primary: COLORS.black} size={26} />
                            
                        </View>
                      
                     
                    ),
                  }}
            />
            <Tab.Screen
                name="Escaner"
                component={scanner}
                options={{
                    headerShown:false,
                    tabBarLabel: 'Scanner',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', alignContent: 'center'}}>
                           <MaterialCommunityIcons name="scanner" color={focused ? COLORS.primary: COLORS.black} size={26} />
                            
                        </View>
                    )
                    /*,
                    tabBarButton: (props) => {
                        <TabBarCustomButton {...props} />
                     }*/
                    }}
                    
            />
            <Tab.Screen
                name="Transporte"
                component={trasportation}
                options={{
                    headerShown:false,
                    tabBarLabel: 'Transporte',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', alignContent: 'center'}}>
                           <MaterialCommunityIcons name="truck-check-outline" color={focused ? COLORS.primary: COLORS.black} size={26} />
                            
                        </View>
                      
                     
                    ),
                  }}
            />
            <Tab.Screen
                name="cuenta"
                component={workorder}
                
                options={{
                    headerShown:false,
                    tabBarLabel: 'Cuenta',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', alignContent: 'center'}}>
                           <MaterialCommunityIcons name="account-outline" color={focused ? COLORS.primary: COLORS.black} size={26} />
                            
                        </View>
                      
                     
                    ),
                  }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;