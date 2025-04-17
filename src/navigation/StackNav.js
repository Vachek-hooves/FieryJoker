import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Home from '../screens/Home';
import SapperGame from '../screens/SapperGame';
import StartGame from '../screens/StartGame';
import Shop from '../screens/Shop';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SapperGame" component={SapperGame} />
      <Stack.Screen name="StartGame" component={StartGame} />
      <Stack.Screen name="Shop" component={Shop} />
    </Stack.Navigator>
  );
};

export default StackNav;
