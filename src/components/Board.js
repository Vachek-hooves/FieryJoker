import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {gameReducer} from '../reducers/gameReducer';
import {createBoard} from '../utils/createBoard';
import Cell from './Cell';
import CustomModal from './customModal';

const BOARD_SIZE = 5;
const BOARD_SIZE_VERTICAL = 6;
const BOMBS_NUM = 1;

export default function Board() {
  const [gameState, dispatch] = React.useReducer(gameReducer, {
    board: createBoard(BOARD_SIZE, BOARD_SIZE_VERTICAL, BOMBS_NUM),
    isGameOver: false,
    numOfOpenCells: 0,
  });
  const [isVisible, setIsVisible] = React.useState(true);

  function handlePress(row, col) {
    dispatch({type: 'HANDLE_CELL', row, col});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {gameState.isGameOver ? 'Game Over' : 'Minesweeper'}
      </Text>

      {gameState.isGameOver && (
        <CustomModal visible={isVisible}>
          <View>
            <Text>helo</Text>
          </View>
        </CustomModal>
      )}

      {gameState.board.map((row, rowIdx) => (
        <View key={rowIdx} style={styles.row}>
          {row.map((cell, cellIdx) => (
            <Cell key={cellIdx} handlePress={handlePress} {...cell} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    gap: 3,
  },
  text: {
    fontWeight: '900',
    fontSize: 32,
  },
});
