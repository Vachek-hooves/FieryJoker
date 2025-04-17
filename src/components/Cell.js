import * as React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useStore} from '../store/context';

export default function Cell({
  row,
  col,
  isBomb,
  isFlipped,
  value,
  handlePress,
}) {
  const {selectedCubFromShop} = useStore();

  const shop = [
    {
      image: require('../../assets/images/cell0.png'),
      price: '0',
    },
    {
      image: require('../../assets/images/cub100.png'),
      price: '100',
    },
    {
      image: require('../../assets/images/cub500.png'),
      price: '500',
    },
    {
      image: require('../../assets/images/cub600.png'),
      price: '600',
    },
    {
      image: require('../../assets/images/cub750.png'),
      price: '750',
    },
  ];

  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(row, col);
      }}
      style={[styles.container, !isFlipped && styles.isFlipped]}>
      {!isFlipped ? (
        <Image
          source={shop[selectedCubFromShop].image}
          style={{width: 69, height: 75}}
        />
      ) : (
        <Image source={require('../../assets/images/flippedCell.png')} />
      )}

      {isFlipped &&
        (isBomb ? (
          <Image
            source={require('../../assets/images/bombJoker.png')}
            style={{position: 'absolute'}}
          />
        ) : (
          <Text
            style={{
              position: 'absolute',
              color: value === 1 ? '#0002F3' : '#067B00',
              fontWeight: '800',
              fontSize: 40,
              fontStyle: 'italic',
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowOpacity: 2,
            }}>
            {value > 0 && value}
          </Text>
        ))}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
