import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const games = [
  { id: 1, name: 'Trivia', icon: require('../assets/game1/game1.jpeg') },
  // { id: 2, name: 'Candy Crush', icon: require('../assets/game2/game2.png') },
  { id: 2, name: 'Trivia', icon: require('../assets/game1/game1.jpeg') },
  // { id: 4, name: 'Candy Crush', icon: require('../assets/game2/game2.png') },
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {games.map((game) => (
          <TouchableOpacity
            key={game.id}
            style={styles.gameTile}
            onPress={() => navigation.navigate(game.name)}
          >
            <Image source={game.icon} style={styles.gameIcon} />
            <Text style={styles.gameTitle}>{game.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    padding: 10
  },
  scrollViewContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  gameTile: {
    width: '45%',
    backgroundColor: '#f0f0f0',
    margin: 5,
    // padding: 15,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  gameIcon: {
    width: 120,
    height: 120,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
