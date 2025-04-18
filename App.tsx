import {NavigationContainer} from '@react-navigation/native';

import StackNav from './src/navigation/StackNav';
import {StoreProvider} from './src/store/context';
import Loader from './src/components/Loader';
import {useEffect, useState} from 'react';

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <StoreProvider>{loader ? <StackNav /> : <Loader />}</StoreProvider>
    </NavigationContainer>
  );
};

export default App;
