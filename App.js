import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import screens
import Home from './components/Home';
import Search from './components/Search';
import Cities from './components/Cities';
import CityInformation from './components/CityInformation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTransparent: true, animationEnabled: false}}>

        <Stack.Screen name='Home' component={Home} options={{animationEnabled: false}}/>
        <Stack.Screen name='Search' component={Search} options={{animationEnabled: false}}/>
        <Stack.Screen name='Cities' component={Cities} options={{animationEnabled: false}}/>
        <Stack.Screen name='CityInformation' component={CityInformation} options={{animationEnabled: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

