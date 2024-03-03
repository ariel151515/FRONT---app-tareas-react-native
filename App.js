import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './screens/HomeScreen'
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createStackNavigator();

const App = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="Home Screen" 
            component={HomeScreen} 
            options={
              ({navigation}) => (
                {
                  headerStyle: {backgroundColor:'#1914F5'}, 
                  headerTitleStyle: {color:'#fff'},
                  headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen')}>
                       <Text 
                          style={
                            { color:'#fff', 
                              marginRight: 20
                            }}>
                              New
                              </Text>

                    </TouchableOpacity>
                  )
                }
              )
            }
            />
            
        <Stack.Screen 
            name="TaskFormScreen" 
            component={TaskFormScreen}  
            options={{
              title:'Create a Task',
              headerStyle: {
                backgroundColor:'#1914F5'
              },
              headerTitleStyle:{color:'#fff'},
              headerTintColor:'#fff'
             }}
            />
            
      </Stack.Navigator>
    </NavigationContainer>
   );
}
 
export default App;

// NavigationContainer es un contenedor de rutas
// NavigationContainer permite definir las distintas rutas o paginas de la application

