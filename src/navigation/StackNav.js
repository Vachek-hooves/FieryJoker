import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import SapperGame from '../screens/SapperGame';
import StartGame from '../screens/StartGame';
import Shop from '../screens/Shop';
import QuestGame from '../screens/QuestGame';

import Levels from '../screens/Levels';
import QuestShop from '../screens/QuestShop';
import EscapeGame from '../screens/EscapeGame';

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
      <Stack.Screen name="EscapeGame" component={EscapeGame} />
    </Stack.Navigator>
  );
};

export default StackNav;
