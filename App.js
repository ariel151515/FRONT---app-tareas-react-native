import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './screens/HomeScreen'
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createStackNavigator();

const App = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   );
}
 
export default App;

// NavigationContainer es un contenedor de rutas
// NavigationContainer permite definir las distintas rutas o paginas de la application

