import RestaurantList from './components/RestaurantList.jsx';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <RestaurantList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
    
