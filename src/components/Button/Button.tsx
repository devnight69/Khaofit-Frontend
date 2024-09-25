import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {colors} from '../../gloabalStyles/globalStyles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  bgColor?: string; // Optional background color prop
  textColor?: string; // Optional text color prop
  height?: number; // Optional height prop
  width?: number | any; // Optional width prop
  borderRadius?: number; // Optional border radius prop
  fontSize?: number; // Optional font size prop
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  bgColor = colors.secondary, // Default background color (orange)
  textColor = '#FFFFFF', // Default text color (white)
  height = 50, // Default height
  width = 200, // Default width
  borderRadius = 25, // Default border radius
  fontSize = 16, // Default font size
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: bgColor, height, width, borderRadius},
      ]}>
      <Text style={[styles.buttonText, {color: textColor, fontSize}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  } as ViewStyle,
  buttonText: {
    fontWeight: 'bold',
  } as TextStyle,
});

export default Button;
