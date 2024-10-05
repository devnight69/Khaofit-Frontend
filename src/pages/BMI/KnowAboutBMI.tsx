import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {RootStackParamList} from '../../../RootStackParams';
import {useNavigation} from '@react-navigation/native';

const KnowAboutBMI = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <View style={styles.container}>
        {/* Text Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>You want to know your BMI</Text>

          {/* Description */}
          <Text style={styles.description}>
            What's BMI?{'\n'}
            Body Mass Index (BMI) is a measurement that estimates body fat based
            on a person's weight and height.
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BMIInputPage')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AEEF', // Gradient background color
    justifyContent: 'space-between',
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30, // Increased font size
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 5,
  },
  headingBold: {
    fontSize: 24, // Increased font size for bold heading
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

export default KnowAboutBMI;
