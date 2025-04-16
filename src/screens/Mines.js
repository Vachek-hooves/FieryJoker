import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';

const generateGrid = (rows, cols, mines) => {
  const grid = Array(rows)
    .fill()
    .map(() =>
      Array(cols).fill({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        neighborMines: 0,
      }),
    );

  // Place mines randomly
  let placedMines = 0;
  while (placedMines < mines) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    if (!grid[row][col].isMine) {
      grid[row][col].isMine = true;
      placedMines++;
    }
  }

  // Calculate neighboring mines
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c].isMine) continue;
      let count = 0;
      directions.forEach(([dr, dc]) => {
        const nr = r + dr;
        const nc = c + dc;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          grid[nr][nc].isMine
        ) {
          count++;
        }
      });
      grid[r][c].neighborMines = count;
    }
  }

  return grid;
};

const Mines = () => {
  const rows = 5;
  const cols = 6;
  const mines = 5;

  const [grid, setGrid] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setGrid(generateGrid(rows, cols, mines));
  }, []);

  const revealCell = (row, col) => {
    if (gameOver || grid[row][col].isRevealed || grid[row][col].isFlagged)
      return;

    if (grid[row][col].isMine) {
      setGameOver(true);
      Alert.alert('Game Over', 'You hit a mine!');
      return;
    }

    const newGrid = [...grid];
    newGrid[row][col].isRevealed = true;
    setGrid(newGrid);

    if (newGrid[row][col].neighborMines === 0) {
      // Reveal surrounding cells recursively
      const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ];
      directions.forEach(([dr, dc]) => {
        const nr = row + dr;
        const nc = col + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          revealCell(nr, nc);
        }
      });
    }
  };

  const cellStyle = cell => {
    if (cell.isRevealed) {
      return cell.isMine ? styles.mine : styles.revealed;
    }
    return styles.cell;
  };

  return (
    <View style={styles.container}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <TouchableOpacity
              key={colIndex}
              style={cellStyle(cell)}
              onPress={() => revealCell(rowIndex, colIndex)}>
              {cell.isRevealed && !cell.isMine ? (
                <Text style={styles.cellText}>{cell.neighborMines || ''}</Text>
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f58',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 30,
    height: 30,
    backgroundColor: '#ccc',
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  revealed: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mine: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Mines;
