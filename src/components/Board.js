import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {gameReducer} from '../reducers/gameReducer';
import {createBoard} from '../utils/createBoard';
import Cell from './Cell';
import CustomModal from './customModal';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useReducer, useState} from 'react';
import {useStore} from '../store/context';

const BOARD_SIZE = 5;
const BOARD_SIZE_VERTICAL = 6;
const BOMBS_NUM = 1;

export default function Board() {
  const [gameState, dispatch] = useReducer(gameReducer, {
    board: createBoard(BOARD_SIZE, BOARD_SIZE_VERTICAL, BOMBS_NUM),
    isGameOver: false,
    isWin: false,
    numOfOpenCells: 0,
  });
  const [isVisible, setIsVisible] = useState(true);
  const [openCells, setOpenCells] = useState(0);
  const {setCoinsQuantity, coinsQuantity} = useStore();

  const navigation = useNavigation();

  function handlePress(row, col) {
    dispatch({type: 'HANDLE_CELL', row, col});
  }

  useEffect(() => {
    if (openCells === 29) {
      if (coinsQuantity > 1000) {
        return;
      } else {
        setCoinsQuantity(prev => prev + 150);
      }
    }
  }, [openCells]);

  useEffect(() => {
    function numOfOpenCells() {
      let total = 0;

      for (let row = 0; row < gameState.board.length; row++) {
        for (let col = 0; col < gameState.board[row].length; col++) {
          if (gameState.board[row][col].isFlipped) {
            total++;
          }
        }
      }

      setOpenCells(total);
    }
    numOfOpenCells();
  });

  return (
    <View style={styles.container}>
      {gameState.isGameOver && (
        <CustomModal visible={isVisible}>
          <View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../../assets/images/modalBoard.png')} />
              <Text style={styles.title}>Game over</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 50,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('Home'), setIsVisible(false);
                }}>
                <Image
                  source={require('../../assets/images/modalHomeBtn.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('StartGame'), setIsVisible(false);
                }}>
                <Image
                  source={require('../../assets/images/modalRestartBtn.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </CustomModal>
      )}
      {openCells === 29 && (
        <CustomModal visible={isVisible}>
          <View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../../assets/images/modalBoard.png')} />
              <Text style={styles.title}>Passed</Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}>
              <Image source={require('../../assets/images/smallBtn150.png')} />

              <Image
                source={require('../assets/images/starIcon.png')}
                style={styles.image}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 50,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('Home'), setIsVisible(false);
                }}>
                <Image
                  source={require('../../assets/images/modalHomeBtn.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('StartGame'), setIsVisible(false);
                }}>
                <Image
                  source={require('../../assets/images/modalRestartBtn.png')}
                />
              </TouchableOpacity>
            </View>
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
  title: {
    position: 'absolute',
    color: '#fff',
    fontWeight: '800',
    fontSize: 55,
    fontStyle: 'italic',
    top: 50,
  },
  row: {
    flexDirection: 'row',
    gap: 3,
  },
  text: {
    fontWeight: '900',
    fontSize: 32,
  },
  image: {
    position: 'absolute',
    top: -5,
    right: 130,
    width: 46,
    height: 46,
  },
});
