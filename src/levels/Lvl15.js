import {useNavigation} from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import CloseButton from '../components/CloseButton';
import {useStore} from '../store/context';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useEffect, useState} from 'react';
import CustomModal from '../components/customModal';
import Orientation from 'react-native-orientation-locker';

const {width} = Dimensions.get('window');
const GRID_SIZE = 6;
const BLOCK_SIZE = width / GRID_SIZE;

const initialBlocks = [
  // Joker block
  {id: 'key', x: 0, y: 3, width: 1.6, height: 1, isKey: true},
  // Other blocks
  {id: 'block1', x: 4, y: 3, width: 1.6, height: 1},
  {
    id: 'block3',
    x: 4,
    y: 4,
    width: 0.6,
    height: 1.9,
    position: 'vertical',
  },
  {
    id: 'block2',
    x: 3,
    y: 2,
    width: 0.6,
    height: 2.9,
    position: 'vertical',
    size: 'large',
  },

  {id: 'block4', x: 2, y: 0, width: 0.6, height: 1.9, position: 'vertical'},
  {id: 'block5', x: 0, y: 4, width: 1.6, height: 1},

  {
    id: 'block6',
    x: 5,
    y: 4,
    width: 0.6,
    height: 1.9,
    position: 'vertical',
  },
  {id: 'block7', x: 4, y: 2, width: 1.6, height: 1},
  {id: 'block8', x: 3, y: 1, width: 1.6, height: 1},
  {id: 'block9', x: 0, y: 5, width: 1.6, height: 1},
  {id: 'block10', x: 0, y: 0, width: 1.6, height: 1},
  {id: 'block11', x: 3, y: 0, width: 1.6, height: 1},
  {
    id: 'block12',
    x: 2,
    y: 2,
    width: 0.6,
    height: 2.9,
    position: 'vertical',
    size: 'large',
  },
];

const Lvl15 = () => {
  const navigation = useNavigation();
  const {
    coinsQuantity,
    health,
    setLockedLevels,
    lockedLevels,
    setCoinsQuantity,
  } = useStore();
  const [blocks, setBlocks] = useState(initialBlocks);
  const [openModal, setOpenModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);


  const onDrag = (event, block) => {
    const {translationX, translationY} = event.nativeEvent;

    setBlocks(prevBlocks =>
      prevBlocks.map(b => {
        if (b.id === block.id) {
          const newX = Math.round(
            (block.x * BLOCK_SIZE + translationX) / BLOCK_SIZE,
          );
          const newY = Math.round(
            (block.y * BLOCK_SIZE + translationY) / BLOCK_SIZE,
          );

          const isValidMove = validateMove(block, newX, newY, prevBlocks);

          if (isValidMove) {
            return {
              ...b,
              x: newX,
              y: newY,
            };
          }
        }
        return b;
      }),
    );
  };

  const validateMove = (block, newX, newY, blocks) => {
    if (
      newX < 0 ||
      newY < 0 ||
      newX + block.width > GRID_SIZE ||
      newY + block.height > GRID_SIZE
    ) {
      return false;
    }

    for (const b of blocks) {
      if (b.id !== block.id) {
        if (
          newX < b.x + b.width &&
          newX + block.width > b.x &&
          newY < b.y + b.height &&
          newY + block.height > b.y
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const checkWinCondition = () => {
    const keyBlock = blocks.find(b => b.isKey);
    if (keyBlock && keyBlock.x === GRID_SIZE - (keyBlock.width + 0.4)) {
      //   alert('You freed the Joker!');
      const unlockLevel = lockedLevels.map((level, idx) => {
        if (idx === 14) {
          return {
            ...level,
            locked: false,
          };
        }
        return level;
      });

      setLockedLevels(unlockLevel);

      setOpenModal(true);
    }
  };

  const renderCell = (rowIndex, colIndex) => (
    <View key={`${rowIndex}-${colIndex}`} style={styles.cell} />
  );

  const renderRow = rowIndex => (
    <View key={rowIndex} style={styles.row}>
      {Array.from({length: 6}).map((_, colIndex) =>
        renderCell(rowIndex, colIndex),
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.boardContainer}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../../assets/images/board.png')} />
          <Text style={styles.text}> Joker's Escape Quest</Text>
        </View>
        <CloseButton navigateTo={'Home'} />
      </View>
      <View style={styles.btnsContainer}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../../assets/images/buttonSmall.png')} />
          <View style={styles.btnWrap}></View>
          <Image
            source={require('../../assets/images/starIcon.png')}
            style={styles.starIcon}
          />
          <Text style={styles.coinsQuantityText}>{coinsQuantity}</Text>
        </View>
        <Text style={styles.levelText}>Level 15</Text>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../assets/images/buttonSmall.png')} />
          <View style={styles.btnWrap}></View>
          <Image
            source={require('../../assets/images/heartIcon.png')}
            style={styles.starIcon}
          />
          <Text style={styles.coinsQuantityText}>{health}/3</Text>
        </View>
      </View>

      <View style={styles.gameBoardContainer}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.board}>
            {Array.from({length: 6}).map((_, rowIndex) => renderRow(rowIndex))}
            <Image
              source={require('../../assets/images/nextLvlArrow.png')}
              style={{position: 'absolute', right: 0, top: 160}}
            />
            <View style={styles.containerBlocks}>
              {blocks.map(block => (
                <PanGestureHandler
                  key={block.id}
                  onGestureEvent={event => onDrag(event, block)}
                  onEnded={checkWinCondition}>
                  {block.size === 'large' ? (
                    <View
                      style={[
                        styles.block,
                        {
                          left: block.x * BLOCK_SIZE,
                          top: block.y * BLOCK_SIZE,
                          width: block.width * BLOCK_SIZE,
                          height: block.height * BLOCK_SIZE,
                        },
                      ]}>
                      {block.position === 'vertical' ? (
                        <Image
                          source={require('../../assets/images/largeBlue.png')}
                          style={{
                            transform: [{rotate: '90deg'}],
                            height: 70,
                            width: 195,
                          }}
                        />
                      ) : block.isKey ? (
                        <Image
                          source={require('../../assets/images/jokerBlock.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/largeRed.png')}
                        />
                      )}
                      {/* <Text style={styles.blockText}>{block.id}</Text> */}
                    </View>
                  ) : (
                    <View
                      style={[
                        styles.block,
                        {
                          left: block.x * BLOCK_SIZE,
                          top: block.y * BLOCK_SIZE,
                          width: block.width * BLOCK_SIZE,
                          height: block.height * BLOCK_SIZE,
                        },
                      ]}>
                      {block.position === 'vertical' ? (
                        <Image
                          source={require('../../assets/images/smallBlueBlock.png')}
                          style={{
                            transform: [{rotate: '90deg'}],
                            height: 60,
                            width: 135,
                          }}
                        />
                      ) : block.isKey ? (
                        <Image
                          source={require('../../assets/images/jokerBlock.png')}
                          style={styles.smallBlockImg}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/smallRed.png')}
                          style={styles.smallBlockImg}
                        />
                      )}

                      {block.isKey && (
                        <Image source={'../../assets/images/jokerBlock.png'} />
                      )}
                    </View>
                  )}
                </PanGestureHandler>
              ))}
            </View>
          </View>
        </View>
      </View>

      {openModal && (
        <CustomModal visible={isVisible}>
          <View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../../assets/images/modalBoard.png')} />
              <Text style={styles.title}>Game Over</Text>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}>
              <Image source={require('../../assets/images/smallBtn150.png')} />

              <Image
                source={require('../../assets/images/starIcon.png')}
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
                  navigation.navigate('Home'),
                    setIsVisible(false),
                    setCoinsQuantity(prev => prev + 150);
                }}>
                <Image
                  source={require('../../assets/images/modalHomeBtn.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('StartGame'),
                    setIsVisible(false),
                    setCoinsQuantity(prev => prev + 150);
                }}>
                <Image
                  source={require('../../assets/images/modalRestartBtn.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </CustomModal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#920000',
  },
  boardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
  },
  btnsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  gameBoardContainer: {
    width: '100%',
    backgroundColor: '#000000',
    paddingVertical: 70,
    borderRadius: 13,
  },
  starIcon: {
    position: 'absolute',
    left: 65,
    bottom: 2,
    width: 46,
    height: 46,
  },

  text: {
    position: 'absolute',
    fontFamily: 'Grenze-ExtraBoldItalic',
    fontSize: 18,
    color: '#FFFFFF',
    top: 35,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 4, height: 1},
    textShadowRadius: 1,
  },
  coinsQuantityText: {
    fontFamily: 'Grenze-ExtraBold',
    fontSize: 25,
    color: '#fff',
    position: 'absolute',
    bottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 4, height: 1},
    textShadowRadius: 1,
  },
  btnWrap: {
    backgroundColor: '#9E1838',
    width: 50,
    height: 20,
    position: 'absolute',
    alignItems: 'center',
  },
  levelText: {
    fontFamily: 'Grenze-ExtraBoldItalic',
    fontSize: 18,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 4, height: 1},
    textShadowRadius: 1,
  },

  row: {
    flexDirection: 'row',
  },
  title: {
    position: 'absolute',
    color: '#fff',
    fontWeight: '800',
    fontSize: 55,
    fontStyle: 'italic',
    top: 50,
  },
  image: {
    position: 'absolute',
    top: -5,
    right: 130,
    width: 46,
    height: 46,
  },
  cell: {
    width: 68,
    height: 68.5,
    borderWidth: 0.5,
    borderColor: '#fff',
    opacity: 0.4,
  },
  containerBlocks: {
    flex: 1,
    backgroundColor: 'black',
    position: 'absolute',
    marginHorizontal: 12,
  },
  block: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  blockText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  smallBlockImg: {
    height: 69,
    width: 135,
  },
});

export default Lvl15;
