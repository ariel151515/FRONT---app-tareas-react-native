import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { NavigationContainer } from "@react-navigation/native";

// Screen
import SettingScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";

const Tab = createBottomTabNavigator();

const MyTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Stack" component={StackScreen} />
                <Tab.Screen name="Settings" component={SettingScreen}  />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default function Navigation() {
    return (
        <NavigationContainer>    
            <MyTab />
        </NavigationContainer>
    )
}