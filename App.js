import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
import HistoriaPantalla from './src/containers/HistoriaPantalla';
import PanesPantalla from './src/containers/PanesPantalla';


const HistoriaStack = createNativeStackNavigator();

function PantallaH() { 
  return (
    <HistoriaStack.Navigator>
      <HistoriaStack.Screen name="Obrador Pan Paco" component={HistoriaPantalla} //PANTALLA DE HISTORIA DE LOS PANES
        options={{ 
          headerStyle:{backgroundColor:'#ffff99'},
          headerTintColor: 'brown',
          headerTitleAlign: 'center',
        }} />
      
  </HistoriaStack.Navigator>
  )};

  const PanesStack = createNativeStackNavigator();

function PantallaP(){
  return(
  <PanesStack.Navigator>
    <PanesStack.Screen name="Tipos de Panes" component={PanesPantalla} //PANTALLA DE PANES DE MI PADRE
      options={{
          headerStyle:{backgroundColor:'#ffff99'},
          headerTintColor: 'brown',
          headerTitleAlign: 'center',
    }} />
    </PanesStack.Navigator>
  )
};

function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator 

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => { //ICONOS
            let iconName;
            if (route.name === 'Historia') {
              iconName = focused
                ? 'ios-book-outline'
                : 'ios-book';
            } else if (route.name === 'Panes') {
              iconName = focused ? 'ios-restaurant-outline'
            : 'ios-restaurant';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'beige',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor:'brown'
        }
        
        )}
      
      >
          <Tab.Screen options = {{
            headerShown:false,
            headerTitle:'Obrador Pan Paco',
            headerTintColor:'black',
            headerTitleAlign:'center'
          }} name= "Historia" component={PantallaH}
          />
          <Tab.Screen options = {{
            headerShown:false,
            headerTitle:'Panes Pan Paco',
            headerTintColor:'black',
            headerTitleAlign:'center'
          }} name= "Panes" component={PantallaP}
          />
      </Tab.Navigator>
    
    </NavigationContainer>
    
  )


}
export default App;
