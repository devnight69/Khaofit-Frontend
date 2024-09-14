// Declare a module augmentation for importing SVG files
declare module '*.svg' {
  // Import necessary modules: React and SvgProps from react-native-svg
  import React from 'react';
  import {SvgProps} from 'react-native-svg';

  // Declare the content as a functional component accepting SvgProps
  const content: React.FC<SvgProps>;

  // Export the content as the default export
  export default content;
}
