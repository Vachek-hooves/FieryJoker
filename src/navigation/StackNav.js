import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import SapperGame from '../screens/SapperGame';
import StartGame from '../screens/StartGame';
import Shop from '../screens/Shop';
import QuestGame from '../screens/QuestGame';

import Levels from '../screens/Levels';
import QuestShop from '../screens/QuestShop';
import EscapeGame from '../screens/EscapeGame';
import Lvl2 from '../levels/Lvl2';
import Lvl3 from '../levels/Lvl3';
import Lvl4 from '../levels/Lvl4';
import Lvl5 from '../levels/Lvl5';
import Lvl6 from '../levels/Lvl6';
import Lvl7 from '../levels/Lvl7';
import Lvl8 from '../levels/Lvl8';
import Lvl9 from '../levels/Lvl9';
import Lvl10 from '../levels/Lvl10';
import Lvl11 from '../levels/Lvl11';
import Lvl12 from '../levels/Lvl12';
import Lvl13 from '../levels/Lvl13';
import Lvl14 from '../levels/Lvl14';
import Lvl15 from '../levels/Lvl15';
import {StoreProvider} from '../store/context';

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
        <Stack.Screen name="Lvl2" component={Lvl2} />
        <Stack.Screen name="Lvl3" component={Lvl3} />
        <Stack.Screen name="Lvl4" component={Lvl4} />
        <Stack.Screen name="Lvl5" component={Lvl5} />
        <Stack.Screen name="Lvl6" component={Lvl6} />
        <Stack.Screen name="Lvl7" component={Lvl7} />
        <Stack.Screen name="Lvl8" component={Lvl8} />
        <Stack.Screen name="Lvl9" component={Lvl9} />
        <Stack.Screen name="Lvl10" component={Lvl10} />
        <Stack.Screen name="Lvl11" component={Lvl11} />
        <Stack.Screen name="Lvl12" component={Lvl12} />
        <Stack.Screen name="Lvl13" component={Lvl13} />
        <Stack.Screen name="Lvl14" component={Lvl14} />
        <Stack.Screen name="Lvl15" component={Lvl15} />
      </Stack.Navigator>
 
  );
};

export default StackNav;
