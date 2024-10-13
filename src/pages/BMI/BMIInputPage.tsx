import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';
import Label from '~/components/InputLabel/InputLabel';
import {colors} from '~/gloabalStyles/globalStyles';
import {postAPI} from '~/api/api';
import {useSelector} from 'react-redux';
import {RootState} from '~/redux/reducers/rootReducer';

const BMIInputPage = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [gender, setGender] = useState('');
  const [bmiDetails, setBmiDetails] = useState({});

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const authSlice = useSelector((state: RootState) => state.AuthSlice);

  const handleCalulateBmi = async () => {
    try {
      const response: any = await postAPI(
        `/bmi/calculate?mobileNumber=${authSlice?.mobileNumber}`,
      );
      if (response?.response) {
        setBmiDetails(response?.data);
        navigation.navigate('BMIResultPage', {bmi: bmiDetails});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllGender = [
    {name: 'Male', code: 'MALE'},
    {name: 'Female', code: 'FEMALE'},
    {name: 'Others', code: 'OTHERS'},
  ];

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headingBold}>Enter Your Details</Text>

        <View style={styles.inputContainer}>
          {/* Age Field */}
          <Label
            label="Age"
            labelStyle={{
              fontSize: 16,
              color: 'white',
              fontWeight: 'normal',
              marginBottom: 5,
            }}>
            <TextInput
              style={styles.input}
              placeholder="Enter your age"
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
              placeholderTextColor="#9C9C9C"
            />
          </Label>

          {/* Weight Field */}
          <Label
            label="Weight (kg)"
            labelStyle={{
              fontSize: 16,
              color: 'white',
              fontWeight: 'normal',
              marginBottom: 5,
            }}>
            <TextInput
              style={styles.input}
              placeholder="Enter your weight"
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
              placeholderTextColor="#9C9C9C"
            />
          </Label>

          {/* Height Fields */}
          <Label
            label="Height"
            labelStyle={{
              fontSize: 16,
              color: 'white',
              fontWeight: 'normal',
              marginBottom: 5,
            }}>
            <View style={styles.heightContainer}>
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="Feet"
                keyboardType="numeric"
                value={heightFt}
                onChangeText={setHeightFt}
                placeholderTextColor="#9C9C9C"
              />
              <TextInput
                style={[styles.input, styles.inputHalf]}
                placeholder="Inches"
                keyboardType="numeric"
                value={heightCm}
                onChangeText={setHeightCm}
                placeholderTextColor="#9C9C9C"
              />
            </View>
          </Label>

          {/* Gender Field */}
          <Label
            label="Gender"
            labelStyle={{
              fontSize: 16,
              color: 'white',
              fontWeight: 'normal',
              marginBottom: 5,
            }}>
            <View style={styles.chipWrapper}>
              {getAllGender.map(option => (
                <TouchableOpacity
                  key={option.code}
                  style={[
                    styles.chip,
                    gender === option.code && styles.selectedChip,
                  ]}
                  onPress={() => setGender(option.code)}>
                  <Text
                    style={[
                      styles.chipText,
                      gender === option.code && styles.selectedChipText,
                    ]}>
                    {option.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Label>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCalulateBmi}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  chipWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: 'white',
    width: '30%',
    textAlign: 'center',
  },
  selectedChip: {
    backgroundColor: colors.secondary,
  },
  chipText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  selectedChipText: {
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#00AEEF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headingBold: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  heightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputHalf: {
    width: '48%',
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

export default BMIInputPage;
