import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import screens
import Home from './components/Home';
import Search from './components/Search';
import Cities from './components/Cities';
import CityInformation from './components/CityInformation';

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

