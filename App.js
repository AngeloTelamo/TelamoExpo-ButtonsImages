import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/Button';


const PlaceholderImage = require('./assets/picture.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      
       <View style={styles.imageContainer}>
       <Text style={{ color: '#25292e' }}>                             ANGELO TELAMO!</Text>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.footerContainer}>
         <Button theme="primary" label="Login" />  
        <Button theme="primary" label="Register" />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E0BB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
