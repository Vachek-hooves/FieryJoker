import {NavigationContainer} from '@react-navigation/native';

import StackNav from './src/navigation/StackNav';
import Mines from './src/screens/Mines';

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
