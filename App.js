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
      <Stack.Navigator screenOptions={{headerShown: true}}>

        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='Cities' component={Cities} />
        <Stack.Screen name='CityInformation' component={CityInformation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

