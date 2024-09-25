import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {RootStackParamList} from '../../../RootStackParams';
import {useNavigation} from '@react-navigation/native';
const KnowAboutBMI = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Top PNG Image */}
      <View style={styles.imageTop}>
        <Image
          source={require('../../assets/tape_measure.png')}
          style={styles.image}
        />
      </View>

      {/* Text Content */}
      <Text style={styles.heading}>You want to know your</Text>
      <Text style={styles.headingBold}>BMI?</Text>

      {/* Description */}
      <Text style={styles.description}>
        What's BMI?{'\n'}
        Body Mass Index (BMI) is a measurement that estimates body fat based on
        a person's weight and height.
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BMIInputPage')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom PNG Image */}
      <View style={styles.imageBottom}>
        <Image
          source={require('../../assets/scale.png')}
          style={styles.imageLarge}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AEEF', // Gradient background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageTop: {
    marginBottom: 20,
    position: 'absolute',
    top: 30,
    left: 30,
  },
  imageBottom: {
    marginTop: 30,
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  imageLarge: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 26, // Increased font size
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 5,
  },
  headingBold: {
    fontSize: 30, // Increased font size for bold heading
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 18, // Slightly larger font size for description
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40, // More spacing for better balance
    lineHeight: 24, // Better readability with increased line height
  },
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
    fontSize: 18, // Larger button text for better readability
    color: '#00AEEF',
    fontWeight: 'bold',
  },
});

export default KnowAboutBMI;
