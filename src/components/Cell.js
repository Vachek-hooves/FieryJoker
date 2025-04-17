import * as React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function Cell({
  row,
  col,
  isBomb,
  isFlipped,
  value,
  handlePress,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(row, col);
      }}
      style={[styles.container, !isFlipped && styles.isFlipped]}>
      {!isFlipped ? (
        <Image source={require('../../assets/images/cell.png')} />
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
