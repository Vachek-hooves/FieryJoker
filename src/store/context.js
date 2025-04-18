import {createContext, useContext, useState} from 'react';

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({children}) => {
  const [coinsQuantity, setCoinsQuantity] = useState(0);
  const [health, setHealth] = useState(3);
  const [selectedCubFromShop, setSelectedCubFromShop] = useState(0);
  const [lockedLevels, setLockedLevels] = useState([
    {
      title: 'Level 1',
      locked: false,
    },
    {
      title: 'Level 2',
      locked: true,
    },
    {
      title: 'Level 3',
      locked: true,
    },
    {
      title: 'Level 4',
      locked: true,
    },
    {
      title: 'Level 5',
      locked: true,
    },
    {
      title: 'Level 6',
      locked: true,
    },
    {
      title: 'Level 7',
      locked: true,
    },
    {
      title: 'Level 8',
      locked: true,
    },
    {
      title: 'Level 9',
      locked: true,
    },
    {
      title: 'Level 10',
      locked: true,
    },
    {
      title: 'Level 11',
      locked: true,
    },
    {
      title: 'Level 12',
      locked: true,
    },
    {
      title: 'Level 13',
      locked: true,
    },
    {
      title: 'Level 14',
      locked: true,
    },
    {
      title: 'Level 15',
      locked: true,
    },
  ]);

  const value = {
    coinsQuantity,
    setCoinsQuantity,
    selectedCubFromShop,
    setSelectedCubFromShop,
    health,
    setHealth,
    lockedLevels,
    setLockedLevels,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
