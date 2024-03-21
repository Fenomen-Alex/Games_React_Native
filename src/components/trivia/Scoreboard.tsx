import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Scoreboard({ isCorrect }) {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    if (isCorrect === null) return;
    if (isCorrect) setCorrect((score) => score + 1);
    else setWrong((score) => score + 1);
  }, [isCorrect]);

  return (
    <View style={styles.scoreboard}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreTextWrong}>{wrong}</Text>
        <Text style={styles.scoreLabel}>wrong</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreTextCorrect}>{correct}</Text>
        <Text style={styles.scoreLabel}>correct</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreboard: {
    display: 'flex',
    alignItems: 'center',
  },
  scoreContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 15,
  },
  scoreTextCorrect: {
    fontSize: 16,
    color: '#555',
  },
  scoreTextWrong: {
    fontSize: 16,
    color: '#c54a4a',
  },
  scoreLabel: {
    fontSize: 12,
    color: '#777',
  },
});
