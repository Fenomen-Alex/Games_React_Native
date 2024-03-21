import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import shuffle from 'lodash.shuffle'

type Props = {
  question: { incorrect_answers: string[], correct_answer: string, question: string },
  answerQuestion: (answer: string) => void
}

const Question = ({ question, answerQuestion }: Props) => {
  console.log(question)
  const [shuffledAnswers, setShuffledAnswers] = useState(() => shuffle([...question.incorrect_answers, question.correct_answer]));

  const handleAnswerPress = (answer) => {
    answerQuestion(answer);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question.question}</Text>
      {shuffledAnswers.map((answer, index) => (
        <TouchableOpacity key={index} style={styles.answerButton} onPress={() => handleAnswerPress(answer)}>
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
    textAlign: 'center'
  },
  answerButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  answerText: {
    fontSize: 16,
    color: '#000'
  },
});

export default Question;
