import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';

const BMIResultPage = ({route}: any) => {
  const bmiDetails: any = route?.params?.bmiDetails?.bmiValue;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Function to determine the BMI progress (out of 100)
  const getBMIProgress = () => {
    if (bmiDetails?.bmiValue <= 18.5) return (bmiDetails?.bmiValue / 18.5) * 25; // Underweight range
    if (bmiDetails?.bmiValue > 18.5 && bmiDetails?.bmiValue <= 24.9)
      return ((bmiDetails?.bmiValue - 18.5) / (24.9 - 18.5)) * 25 + 25; // Normal range
    if (bmiDetails?.bmiValue >= 25 && bmiDetails?.bmiValue <= 29.9)
      return ((bmiDetails?.bmiValue - 25) / (29.9 - 25)) * 25 + 50; // Overweight range
    if (bmiDetails?.bmiValue >= 30)
      return Math.min(((bmiDetails?.bmiValue - 30) / (35 - 30)) * 25 + 75, 100); // Obese range, cap at 100%
  };

  // Function to determine BMI category and corresponding color
  const getBMICategory = () => {
    if (bmiDetails?.bmiValue < 18.5)
      return {category: 'Underweight', color: '#1E90FF'}; // Blue
    if (bmiDetails?.bmiValue >= 18.5 && bmiDetails?.bmiValue <= 24.9)
      return {category: 'Normal weight', color: '#32CD32'}; // Green
    if (bmiDetails?.bmiValue >= 25 && bmiDetails?.bmiValue <= 29.9)
      return {category: 'Overweight', color: '#FFA500'}; // Orange
    return {category: 'Obese', color: '#FF4500'}; // Red
  };

  const {color} = getBMICategory();
  const bmiProgress: any = getBMIProgress();

  return (
    <>
      <View style={styles.container}>
        {/* Result Header */}
        <Text style={styles.headingBold}>Your BMI Result</Text>

        {/* BMI Meter */}
        <View style={styles.meterContainer}>
          <View
            style={[
              styles.meterBar,
              {width: `${bmiProgress}%`, backgroundColor: color},
            ]}
          />
        </View>

        {/* BMI Value and Category */}
        <Text style={styles.bmiValue}>
          BMI: {bmiDetails?.bmiValue?.toFixed(1)}
        </Text>
        <Text style={styles.bmiCategory}>Category: {bmiDetails?.category}</Text>

        {/* BMI Category Ranges */}
        <View style={styles.bmiRangesContainer}>
          <Text style={[styles.bmiRange, {color: '#1E90FF'}]}>
            Underweight: {'<'} 18.5
          </Text>
          <Text style={[styles.bmiRange, {color: '#32CD32'}]}>
            Normal weight: 18.5 - 24.9
          </Text>
          <Text style={[styles.bmiRange, {color: '#FFA500'}]}>
            Overweight: 25 - 29.9
          </Text>
          <Text style={[styles.bmiRange, {color: '#FF4500'}]}>Obese: ≥ 30</Text>
        </View>
      </View>

      <View style={styles.footer}>
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
  container: {
    flex: 1,
    backgroundColor: '#00AEEF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#00AEEF',
    fontWeight: 'bold',
  },
});

export default BMIResultPage;
