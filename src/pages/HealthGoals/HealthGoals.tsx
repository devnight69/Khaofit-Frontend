import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {RootStackParamList} from '../../../RootStackParams';
import {useNavigation} from '@react-navigation/native';

const HealthGoals = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
  };

  const handleNext = () => {
    if (selectedGoal) {
      console.log('Selected Goal:', selectedGoal);
      navigation.navigate('BMICaloriesPage');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingBold}>What Goals Do You Want to Achieve?</Text>

      <View style={styles.optionsContainer}>
        {/* Weight Loss Option */}
        <TouchableOpacity
          style={[
            styles.optionCard,
            selectedGoal === 'weight_loss' && styles.selectedOption,
          ]}
          onPress={() => handleGoalSelect('weight_loss')}>
          <Image
            source={require('../../assets/weight_loss.png')}
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Weight Loss</Text>
        </TouchableOpacity>

        {/* Bulk Up Option */}
        <TouchableOpacity
          style={[
            styles.optionCard,
            selectedGoal === 'bulk_up' && styles.selectedOption,
          ]}
          onPress={() => handleGoalSelect('bulk_up')}>
          <Image
            source={require('../../assets/bulk_up.png')}
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Bulk Up</Text>
        </TouchableOpacity>

        {/* Stay Fit Option */}
        <TouchableOpacity
          style={[
            styles.optionCard,
            selectedGoal === 'stay_fit' && styles.selectedOption,
          ]}
          onPress={() => handleGoalSelect('stay_fit')}>
          <Image
            source={require('../../assets/stay_fit.png')}
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Stay Fit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate('NextPage')}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
          disabled={!selectedGoal}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  optionsContainer: {
    width: '100%',
    flexDirection: 'column', // Stack options vertically
    alignItems: 'center',
    marginBottom: 40,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '90%', // Width adjusted for better appearance
    height: 150,
    elevation: 3,
    marginBottom: 20, // Space between cards
  },
  selectedOption: {
    backgroundColor: '#D3D3D3', // Change to a light gray background for selected option
    borderWidth: 2,
    borderColor: '#00AEEF', // Border color to highlight selected option
  },
  optionImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#00AEEF',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    elevation: 3,
    width: '46%',
  },
  buttonText: {
    fontSize: 18,
    color: '#00AEEF',
    fontWeight: 'bold',
  },
});

export default HealthGoals;
