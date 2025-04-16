import {useNavigation} from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainTitle from '../components/MainTitle';
import CloseButton from '../components/CloseButton';
import Cell from '../components/Cell';
import Board from '../components/Board';

const SapperGame = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../src/assets/images/back.png')}>
      <View style={styles.titleContainer}>
        <MainTitle title={'Sapper'} />
        <CloseButton />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../assets/images/buttonSmall.png')} />
          <View style={styles.wrap}>
            <Text style={{textAlign: 'center'}}>0</Text>
          </View>
          <Image
            source={require('../assets/images/starIcon.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../assets/images/buttonSmall.png')} />
          <View style={styles.wrap}>
            <Text style={{textAlign: 'center'}}>2/2</Text>
          </View>
          <Image
            source={require('../assets/images/heartIcon.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <Board />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
  },
  wrap: {
    backgroundColor: '#9E1838',
    width: 50,
    height: 21,
    position: 'absolute',
  },
  image: {
    position: 'absolute',
    left: 65,
    bottom: 2,
    width: 46,
    height: 46,
  },
});

export default SapperGame;

// import React, {useState, useEffect} from 'react';
// import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';

// const SapperGame = () => {
//   const rows = 10;
//   const cols = 10;
//   const mines = 15;

//   const [grid, setGrid] = useState([]);
//   const [gameOver, setGameOver] = useState(false);

//   const generateGrid = (rows, cols, mines) => {
//     const grid = Array(rows)
//       .fill()
//       .map(() =>
//         Array(cols).fill({
//           isMine: false,
//           isRevealed: false,
//           isFlagged: false,
//           neighborMines: 0,
//         }),
//       );

//     // Place mines randomly
//     let placedMines = 0;
//     while (placedMines < mines) {
//       const row = Math.floor(Math.random() * rows);
//       const col = Math.floor(Math.random() * cols);
//       if (!grid[row][col].isMine) {
//         grid[row][col].isMine = true;
//         placedMines++;
//       }
//     }

//     // Calculate neighboring mines
//     const directions = [
//       [-1, -1],
//       [-1, 0],
//       [-1, 1],
//       [0, -1],
//       [0, 1],
//       [1, -1],
//       [1, 0],
//       [1, 1],
//     ];
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         if (grid[r][c].isMine) continue;
//         let count = 0;
//         directions.forEach(([dr, dc]) => {
//           const nr = r + dr;
//           const nc = c + dc;
//           if (
//             nr >= 0 &&
//             nr < rows &&
//             nc >= 0 &&
//             nc < cols &&
//             grid[nr][nc].isMine
//           ) {
//             count++;
//           }
//         });
//         grid[r][c].neighborMines = count;
//       }
//     }

//     return grid;
//   };

//   useEffect(() => {
//     setGrid(generateGrid(rows, cols, mines));
//   }, []);

//   const revealCell = (row, col) => {
//     if (gameOver || grid[row][col].isRevealed || grid[row][col].isFlagged)
//       return;

//     if (grid[row][col].isMine) {
//       setGameOver(true);
//       Alert.alert('Game Over', 'You hit a mine!');
//       return;
//     }

//     const newGrid = [...grid];
//     newGrid[row][col].isRevealed = true;
//     setGrid(newGrid);

//     if (newGrid[row][col].neighborMines === 0) {
//       // Reveal surrounding cells recursively
//       const directions = [
//         [-1, -1],
//         [-1, 0],
//         [-1, 1],
//         [0, -1],
//         [0, 1],
//         [1, -1],
//         [1, 0],
//         [1, 1],
//       ];
//       directions.forEach(([dr, dc]) => {
//         const nr = row + dr;
//         const nc = col + dc;
//         if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
//           revealCell(nr, nc);
//         }
//       });
//     }
//   };

//   const cellStyle = cell => {
//     if (cell.isRevealed) {
//       return cell.isMine ? styles.mine : styles.revealed;
//     }
//     return styles.cell;
//   };

//   return (
//     <View style={styles.container}>
//       {grid.map((row, rowIndex) => (
//         <View key={rowIndex} style={styles.row}>
//           {row.map((cell, colIndex) => (
//             <TouchableOpacity
//               key={colIndex}
//               style={cellStyle(cell)}
//               onPress={() => revealCell(rowIndex, colIndex)}>
//               {cell.isRevealed && !cell.isMine ? (
//                 <Text style={styles.cellText}>{cell.neighborMines || ''}</Text>
//               ) : null}
//             </TouchableOpacity>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   cell: {
//     width: 30,
//     height: 30,
//     backgroundColor: '#ccc',
//     margin: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   revealed: {
//     width: 30,
//     height: 30,
//     backgroundColor: '#fff',
//     margin: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   mine: {
//     width: 30,
//     height: 30,
//     backgroundColor: 'red',
//     margin: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cellText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default SapperGame;
