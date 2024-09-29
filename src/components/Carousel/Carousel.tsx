import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList, Image, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const images = [
  require('../../assets/carousel_one.png'),
  require('../../assets/carousel_two.png'),
  require('../../assets/carousel_three.png'),
  require('../../assets/carousel_four.png'),
];

const Carousel = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // 3-second interval

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);

  const renderItem = ({item}: {item: any}) => (
    <View>
      <Image
        source={item}
        style={{
          width: width, // Set image width to device width
          height: undefined, // Adjust the height
          aspectRatio: 16 / 9, // Maintain aspect ratio
          transform: 'scale(0.9)',
          marginLeft: -14,
          marginTop: -40,
        }}
        resizeMode="contain" // Ensure image fits within container
      />
    </View>
  );

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onScrollToIndexFailed={() => {
          // Handle cases when scrollToIndex fails
        }}
      />
    </View>
  );
};

export default Carousel;
