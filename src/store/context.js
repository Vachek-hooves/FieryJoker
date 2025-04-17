import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useContext, useState} from 'react';

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({children}) => {
  const [coinsQuantity, setCoinsQuantity] = useState(1000);
  const [selectedCubFromShop, setSelectedCubFromShop] = useState(0);

  console.log('selectedCubFromShop', selectedCubFromShop);

  const savePlayers = async players => {
    try {
      await AsyncStorage.setItem('players', JSON.stringify(players));
      console.log('saved');
    } catch (error) {
      console.log('err to save players', error);
    }
  };

  const getPlayers = async () => {
    try {
      const data = await AsyncStorage.getItem('players');
      const players = data != null ? JSON.parse(data) : [];
      console.log('players from storage', players);
      setPlayersStore(players);
    } catch (error) {
      console.log('err to save players', error);
    }
  };

  const value = {
    coinsQuantity,
    setCoinsQuantity,
    selectedCubFromShop,
    setSelectedCubFromShop,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
