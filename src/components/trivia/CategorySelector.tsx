import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import constants from "../../utils/constants";

const CategorySelector = ({ category, chooseCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [showDropdown, setShowDropdown] = useState(false);
  const categories = constants.categories;

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId);
    chooseCategory(categoryId);
    setShowDropdown(false);
  };

  const renderCategoryItem = (category) => (
    <TouchableOpacity
      key={category.id}
      style={styles.categoryItem}
      onPress={() => handleCategoryPress(category.id)}
    >
      <Text style={styles.categoryText}>{category.name}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => (
    <View style={styles.dropdown}>
      {categories.map(renderCategoryItem)}
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.categoryButton} onPress={() => setShowDropdown(!showDropdown)}>
        <Text style={styles.buttonText}>{selectedCategory ? categories.find(c => c.id === selectedCategory).name : 'Select Category'}</Text>
        {showDropdown && <Text style={styles.dropdownIcon}>&#x25BC;</Text>}
      </TouchableOpacity>
      {showDropdown && renderDropdown()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 16,
  },
  dropdownIcon: {
    fontSize: 18,
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  categoryText: {
    fontSize: 16,
  },
});

export default CategorySelector;
