import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from "react-native";
import useTrivia from "../hooks/useTrivia";
import Scoreboard from "../components/trivia/Scoreboard";
import ResultModal from "../components/trivia/ResultModal";
import Question from "../components/trivia/Question";
import CategorySelector from "../components/trivia/CategorySelector"; // Basic components

export default function Trivia() {
  const { question, getQuestion, category, setCategory } = useTrivia();

  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleQuestionAnswered = (answer) => {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  };

  const handleNextQuestion = () => {
    setIsCorrect(null);
    getQuestion();
  };

  return (
    <View style={styles.app}>
      {/* Show the result modal */}
      {isCorrect !== null && <ResultModal isCorrect={isCorrect} question={question} getQuestion={handleNextQuestion} />}

      {/* Question header */}
      <View style={styles.questionHeader}>
        <CategorySelector category={category} chooseCategory={setCategory} />
        <Scoreboard isCorrect={isCorrect} />
      </View>

      {/* The question itself */}
      <View style={styles.questionMain}>
        {question && <Question question={question} answerQuestion={handleQuestionAnswered} />}
      </View>

      {/* Question footer */}
      <View style={styles.questionFooter}>
        <Button title="Go to next question  " onPress={handleNextQuestion} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1, // Allow app to fill the entire screen
    backgroundColor: '#fff', // Set background color (optional)
  },
  questionHeader: {
    flexDirection: 'row', // Arrange elements horizontally
    justifyContent: 'space-between', // Distribute elements evenly
    alignItems: 'center', // Align elements vertically
    padding: 10, // Add padding (optional)
  },
  questionMain: {
    // Add styles for the question area (optional)
  },
  questionFooter: {
    padding: 10, // Add padding (optional)
  },
});
