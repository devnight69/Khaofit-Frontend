// src/components/PhoneNumberInput.tsx
import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

interface PhoneNumberInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  maxLength?: number;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChangeText,
  placeholder = '',
  maxLength,
}) => {
  // Function to handle text input and allow only numeric values
  const handleTextChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    onChangeText(numericText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.legend}>+91</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleTextChange}
        keyboardType="number-pad"
        placeholder={placeholder}
        placeholderTextColor="#888"
        maxLength={maxLength}
        // This removes the default yellow highlight on selection
        selectionColor="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  legend: {
    fontSize: 16,
    marginRight: 8,
    color: '#888',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    // Disable text selection highlight
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
});

export default PhoneNumberInput;
