// src/components/Typography.tsx
import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle, View} from 'react-native';

interface TypographyProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption';
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  onPress?: () => void;
  width?: string | number; // Add width prop
}

const Typography: React.FC<TypographyProps> = ({
  children,
  style,
  variant = 'body1',
  color = '#000',
  align = 'left',
  onPress,
}) => {
  const getVariantStyle = (variant: string): TextStyle => {
    switch (variant) {
      case 'h1':
        return {fontSize: 32, fontWeight: 'bold'};
      case 'h2':
        return {fontSize: 28, fontWeight: 'bold'};
      case 'h3':
        return {fontSize: 24, fontWeight: 'bold'};
      case 'body1':
        return {fontSize: 16};
      case 'body2':
        return {fontSize: 14};
      case 'caption':
        return {fontSize: 12, color: '#888'};
      default:
        return {fontSize: 16};
    }
  };

  const textStyle: TextStyle = {
    ...getVariantStyle(variant),
    color,
    textAlign: align,
  };

  const containerStyle: ViewStyle = {
    width: 'auto',
  };

  const TouchableComponent = onPress ? TouchableOpacity : View;

  return (
    <TouchableComponent onPress={onPress} style={containerStyle}>
      <Text style={[textStyle, style]}>{children}</Text>
    </TouchableComponent>
  );
};

export default Typography;
