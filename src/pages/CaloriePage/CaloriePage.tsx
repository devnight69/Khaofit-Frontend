import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../RootStackParams';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const BMICaloriesPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Based on your BMI and goal, you should consume:
      </Text>
      <Image
        source={require('../../assets/whey-image.png')}
        style={styles.imageTop}
      />
      <Text style={styles.calorieText}>250 - 500 calories</Text>
      <Image
        source={require('../../assets/dumbbell-image.png')}
        style={styles.imageBottom}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('homepage')}>
          <Text style={styles.buttonText}>Go to Homepage</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Increased width for button alignment
    marginBottom: 30,
  },
  button: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 25, // Consistent rounded corners
    paddingVertical: 15, // Increased padding for more clickable area
    marginHorizontal: 10,
    alignItems: 'center',
    elevation: 3, // Added elevation for better button visibility
  },
  buttonText: {
    fontSize: 18,
    color: '#00AEEF',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#00AEEF', // updated background color
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#ffffff',
    marginHorizontal: 30,
  },
  calorieText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginVertical: 20,
  },
  imageTop: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    top: 40,
    right: 30,
  },
  imageBottom: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 40,
    left: 30,
  },
});

export default BMICaloriesPage;
