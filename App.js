import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import screens
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Cities from './src/screens/Cities';
import CityInformation from './src/screens/CityInformation';

const Stack = createNativeStackNavigator(); //Initiate stack navigator

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='Cities' component={Cities}/>
        <Stack.Screen name='City Information' component={CityInformation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

