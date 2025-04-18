import {createContext, useContext, useState} from 'react';

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({children}) => {
  const [coinsQuantity, setCoinsQuantity] = useState(0);
  const [selectedCubFromShop, setSelectedCubFromShop] = useState(0);

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
