import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ResultModal = ({ isCorrect, getQuestion, question }) => {
  const resultStyle = isCorrect ? styles.isCorrect : styles.isWrong;

  return (
    <View style={[styles.resultModal, resultStyle]}>
      <View style={styles.overlay} />
      <View style={styles.resultModalContent}>
        {isCorrect && (
          <h3>
            <Text role="img" aria-label="emoji">👊👊👊</Text>
            <br />
            <Text>YOU WON!</Text>
          </h3>
        )}

        {!isCorrect && (
          <h3>
            <Text role="img" aria-label="emoji">😟😢😟</Text>
            <br />
            <Text>YOU LOST!</Text>
          </h3>
        )}

        {!isCorrect && (
          <View style={styles.correctAnswer}>
            <Text style={styles.correctAnswerText}>The correct answer was:</Text>
            <Text style={styles.correctAnswerStrong} dangerouslySetInnerHTML={{ __html: question.correct_answer }} />
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={getQuestion}>
          <Text>Go to next question <Text role="img" aria-label="emoji">👉</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay background color
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  resultModalContent: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 30,
    width: 400,
    margin: 0,
    alignSelf: 'center', // Center horizontally
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  isCorrect: {
    // Add styles for the modal when the answer is correct (optional)
  },
  isWrong: {
    // Add styles for the modal when the answer is wrong (optional)
  },
  resultModalContentH3: {
    fontSize: 30,
    lineHeight: 1.5,
    marginBottom: 20,
  },
  correctAnswer: {
    marginBottom: 20,
  },
  correctAnswerText: {
    color: '#777',
  },
  correctAnswerStrong: {
    fontSize: 40,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4dc0b5', // Button background color
    color: '#195e5b', // Button text color
    padding: 15,
    borderRadius: 5,
    width: '100%',
    marginBottom: 8,
  },
});

export default ResultModal;
