import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ImageBackground } from 'react-native';
import { MenuItem } from '../models/MenuItem';
import { sharedStyles } from '../styles/SharedStyles';

const HomeScreen = ({ menuItems }: { menuItems: MenuItem[] }) => {
  
  // Calculate average price by course
  const calculateAveragePriceByCourse = (course: string) => {
    const itemsByCourse = menuItems.filter(item => item.course === course);
    if (itemsByCourse.length === 0) return null;
    const total = itemsByCourse.reduce((sum, item) => sum + item.price, 0);
    return (total / itemsByCourse.length).toFixed(2);
  };

  const courses = ["Starter", "Main", "Dessert"];

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemTitle}>{item.name} ({item.course})</Text>
      <Text>{item.description}</Text>
      <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <ImageBackground 
      source={require('../img/background.jpg')} 
      style={sharedStyles.container}
    >
      <Image source={require('../img/logo.png')} style={sharedStyles.logoCircle} />
      <Text style={styles.header}>Menu</Text>

      <View style={styles.menuListContainer}>
        {/* Display Average Prices */}
        {courses.map(course => {
          const avgPrice = calculateAveragePriceByCourse(course);
          return avgPrice && (
            <Text key={course} style={styles.averageText}>
              Average Price for {course}: R{avgPrice}
            </Text>
          );
        })}

        
        <FlatList 
          data={menuItems} 
          renderItem={renderItem} 
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  menuListContainer: {
    backgroundColor: '#FFF', 
    padding: 10,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    opacity: 0.9, 
  },
  averageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  listContent: {
    paddingVertical: 10,
  },
  menuItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
});

export default HomeScreen;
