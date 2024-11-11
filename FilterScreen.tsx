import React, { useState } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, ImageBackground } from 'react-native';
import { MenuItem } from '../models/MenuItem';
import { sharedStyles } from '../styles/SharedStyles';

interface FilterScreenProps {
  menuItems: MenuItem[];
}

const FilterScreen: React.FC<FilterScreenProps> = ({ menuItems }) => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredItems = filter ? menuItems.filter(item => item.course === filter) : menuItems;

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemText}>{item.name} ({item.course})</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
      <View style={sharedStyles.container}>
        <Image source={require('../img/logo.png')} style={sharedStyles.logoCircle} />
        <Text style={styles.header}>Filter by Course</Text>
        <View style={styles.buttonContainer}>
          <Button title="Show Starters" onPress={() => setFilter('Starter')} />
          <Button title="Show Mains" onPress={() => setFilter('Main')} />
          <Button title="Show Desserts" onPress={() => setFilter('Dessert')} />
          <Button title="Show All" onPress={() => setFilter(null)} />
        </View>
        <FlatList 
          data={filteredItems} 
          renderItem={renderItem} 
          keyExtractor={item => item.id} 
          contentContainerStyle={styles.list}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  menuItem: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    width: '90%',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});

export default FilterScreen;
