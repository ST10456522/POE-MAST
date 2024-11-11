import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#f5f5f5', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  logoCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20, 
  },
  
  logo: {
    width: 150, 
    height: 150,
    borderRadius: 75, 
    marginBottom: 20,
  },
});
