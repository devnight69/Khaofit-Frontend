// src/components/FlexWrapper.tsx
import React from 'react';
import {View, ViewStyle} from 'react-native';

interface FlexWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flex?: number;
  gap?: number;
}

const FlexWrapper: React.FC<FlexWrapperProps> = ({
  children,
  style,
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  flex,
  gap,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          flex,
          gap: gap,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default FlexWrapper;
