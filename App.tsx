import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ChefScreen from './screens/ChefScreen';
import FilterScreen from './screens/FilterScreen';
import { MenuItem } from './models/MenuItem';

const Tab = createBottomTabNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'Caesar Salad',
      description: 'Classic Caesar with crispy croutons and fresh Parmesan.',
      course: 'Starter',
      price: 58.99,
      ingredients: ['Lettuce', 'Parmesan', 'Croutons', 'Caesar dressing'],
      allergens: ['Dairy', 'Gluten'],
      recommended: true,
    },
    {
      id: '2',
      name: 'Grilled Salmon',
      description: 'Salmon fillet with lemon butter sauce and vegetables.',
      course: 'Main',
      price: 85.99,
      ingredients: ['Salmon', 'Lemon', 'Butter', 'Vegetables'],
      allergens: ['Fish', 'Dairy'],
      recommended: true,
    },
    {
      id: '3',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a gooey center and vanilla ice cream.',
      course: 'Dessert',
      price: 6.99,
      ingredients: ['Chocolate', 'Flour', 'Sugar', 'Eggs'],
      allergens: ['Dairy', 'Gluten', 'Eggs'],
      recommended: true,
    },
  ]);

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home">
          {(props) => <HomeScreen {...props} menuItems={menuItems} />}
        </Tab.Screen>
        <Tab.Screen name="Chef">
          {(props) => <ChefScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />}
        </Tab.Screen>
        <Tab.Screen name="Filter">
          {(props) => <FilterScreen {...props} menuItems={menuItems} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
