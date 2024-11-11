import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Image } from 'react-native';
import { MenuItem } from '../models/MenuItem';
import { sharedStyles } from '../styles/SharedStyles';

const ChefScreen = ({ menuItems, setMenuItems }: { menuItems: MenuItem[], setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>> }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starter');
  const [price, setPrice] = useState('');

  const addMenuItem = () => {
    
    if (!price) {
      alert("Please enter a price");
      return;
    }

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      alert("Please enter a valid number for the price");
      return;
    }

    // Create a new menu item
    const newItem: MenuItem = {
      id: (menuItems.length + 1).toString(),
      name,
      description,
      course,
      price: parsedPrice,
      ingredients: [],
      allergens: [],
      recommended: false
    };

    
    setMenuItems([...menuItems, newItem]);
    clearInputs();
  };

  const clearInputs = () => {
    setName('');
    setDescription('');
    setPrice(''); 
    setCourse('Starter');
  };

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <Text>{item.name} - {item.course} - R{item.price.toFixed(2)}</Text>
      <Text>{item.description}</Text>
      <Button title="Remove" onPress={() => removeMenuItem(item.id)} />
    </View>
  );

  const removeMenuItem = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <View style={sharedStyles.container}>
      <Image source={require('../img/logo.png')} style={sharedStyles.logoCircle} />
      <Text style={styles.header}>Add New Menu Item</Text>
      
      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Course (e.g., Starter, Main, Dessert)"
        value={course}
        onChangeText={setCourse}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <Button title="Add Item" onPress={addMenuItem} />
        <Button title="Cancel" onPress={clearInputs} />
      </View>

      <Text style={styles.header}>Menu Items</Text>
      <FlatList 
        data={menuItems} 
        renderItem={renderItem} 
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '90%',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
  },
  menuItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default ChefScreen;
