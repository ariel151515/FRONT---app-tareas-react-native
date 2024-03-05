import React from "react";
import "react-native-gesture-handler";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 

// Screen
import SettingScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";
import HomeScreen from './screens/HomeScreen'
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Icons
import { AntDesign } from '@expo/vector-icons';

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={({ navigation }) => ({
        headerStyle: { backgroundColor:'#1914F5' }, 
        headerTitleStyle: { color:'#fff' },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen')}>
            <Text style={{ color:'#fff', marginRight: 20 }}>New</Text>
          </TouchableOpacity>
        )
      })}
    />
    <Stack.Screen 
      name="TaskFormScreen" 
      component={TaskFormScreen}  
      options={{
        title: 'Create a Task',
        headerStyle: { backgroundColor:'#1914F5' },
        headerTitleStyle: { color:'#fff' },
        headerTintColor: '#fff'
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return ( 
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainStack} options={{headerShown:false}}/>
        <Tab.Screen name="Stack" component={StackScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} 
           options={{
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="setting" size={size} color={color} />
            ),
            tabBarBadge:3,
            headerShown:false,
            title: "Setting",
         }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
 
export default App;
