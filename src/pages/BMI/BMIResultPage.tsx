import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';

const BMIResultPage = ({bmi = 46, category = 'overweight'}: any) => {
  // Function to determine the BMI progress (out of 100)
  const getBMIProgress = () => {
    if (bmi <= 18.5) return (bmi / 18.5) * 25; // Underweight range
    if (bmi > 18.5 && bmi <= 24.9)
      return ((bmi - 18.5) / (24.9 - 18.5)) * 25 + 25; // Normal range
    if (bmi >= 25 && bmi <= 29.9) return ((bmi - 25) / (29.9 - 25)) * 25 + 50; // Overweight range
    if (bmi >= 30) return Math.min(((bmi - 30) / (35 - 30)) * 25 + 75, 100); // Obese range, cap at 100%
  };

  const bmiProgress: any = getBMIProgress();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <View style={styles.container}>
        {/* Result Header */}
        <Text style={styles.headingBold}>Your BMI Result</Text>

        {/* BMI Meter */}
        <View style={styles.meterContainer}>
          <View style={[styles.meterBar, {width: `${bmiProgress}%`}]} />
        </View>

        {/* BMI Value and Category */}
        <Text style={styles.bmiValue}>BMI: {bmi?.toFixed(1)}</Text>
        <Text style={styles.bmiCategory}>Category: {category}</Text>

        {/* BMI Category Ranges */}
        <View style={styles.bmiRangesContainer}>
          <Text style={styles.bmiRange}>Underweight: {'<'} 18.5</Text>
          <Text style={styles.bmiRange}>Normal weight: 18.5 - 24.9</Text>
          <Text style={styles.bmiRange}>Overweight: 25 - 29.9</Text>
          <Text style={styles.bmiRange}>Obese: ≥ 30</Text>
        </View>
      </View>
      <View style={styles.footer}>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HealthGoals')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Increased width for button alignment
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#00AEEF', // Gradient background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageTop: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
  imageBottom: {
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
  headingBold: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  meterContainer: {
    width: '80%',
    height: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  meterBar: {
    height: '100%',
    backgroundColor: '#FF6347', // Color can change based on BMI category
    borderRadius: 15,
  },
  bmiValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  bmiCategory: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  bmiRangesContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  bmiRange: {
    fontSize: 16,
    color: '#FFFFFF',
    marginVertical: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#00AEEF',
    gap: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12, // Consistent rounded corners
    paddingVertical: 14, // Increased padding for more clickable area
    // marginHorizontal: 10,
    alignItems: 'center',
    elevation: 3, // Added elevation for better button visibility
  },
  buttonText: {
    fontSize: 18, // Larger button text for better readability
    color: '#00AEEF',
    fontWeight: 'bold',
  },
});

export default BMIResultPage;
