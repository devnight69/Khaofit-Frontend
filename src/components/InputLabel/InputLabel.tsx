// src/components/Label.tsx
import React from 'react';
import {Text, View, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface LabelProps {
  children: React.ReactNode;
  label: string;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const Label: React.FC<LabelProps> = ({
  children,
  label,
  labelStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Label;
