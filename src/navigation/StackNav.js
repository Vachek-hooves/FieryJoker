import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import Home from '../screens/Home';
import SapperGame from '../screens/SapperGame';
import StartGame from '../screens/StartGame';
import Shop from '../screens/Shop';
import QuestGame from '../screens/QuestGame';
import QuestShop from '../screens/QuestShop';
import Levels from '../screens/Levels';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SapperGame" component={SapperGame} />
      <Stack.Screen name="StartGame" component={StartGame} />
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="QuestGame" component={QuestGame} />
      <Stack.Screen name="QuestShop" component={QuestShop} />
      <Stack.Screen name="Levels" component={Levels} />
    </Stack.Navigator>
  );
};

export default StackNav;
