import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';
const BMIInputPage = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <>
      <View style={styles.container}>
        {/* Text Content */}
        <Text style={styles.headingBold}>Enter Your Details</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
            placeholderTextColor="#9C9C9C"
          />
          <TextInput
            style={styles.input}
            placeholder="Weight (kg)"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            placeholderTextColor="#9C9C9C"
          />
          <View style={styles.heightContainer}>
            <TextInput
              style={[styles.input, styles.inputHalf]}
              placeholder="Height (ft)"
              keyboardType="numeric"
              value={heightFt}
              onChangeText={setHeightFt}
              placeholderTextColor="#9C9C9C"
            />
            <TextInput
              style={[styles.input, styles.inputHalf]}
              placeholder="Height (Inches)"
              keyboardType="numeric"
              value={heightCm}
              onChangeText={setHeightCm}
              placeholderTextColor="#9C9C9C"
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BMIResultPage')}>
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
  headingBold: {
    fontSize: 30, // Consistent large heading
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    // paddingHorizontal: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  heightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputHalf: {
    width: '48%', // Half width for height inputs
  },
  buttonContainer: {
    width: '80%', // Same width as the previous page for buttons
    marginTop: 20,
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

export default BMIInputPage;
