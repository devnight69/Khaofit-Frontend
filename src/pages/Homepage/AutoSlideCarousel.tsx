import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.75; // The width of the main card
const SPACING = -10; // Space between cards
const FULL_SIZE = CARD_WIDTH + SPACING * 2; // Total size of each card with spacing

const tierData = [
  {
    id: '1',
    image: require('../../assets/gold_card.png'),
  },
  {
    id: '2',
    image: require('../../assets/silver_card.png'),
  },
  {
    id: '3',
    image: require('../../assets/plat_card.png'),
  },
];

const AutoSlideCarousel = () => {
  const flatListRef: any = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current; // Track scroll position

  useEffect(() => {
    const autoScroll = setInterval(() => {
      const nextIndex =
        currentIndex === tierData.length - 1 ? 0 : currentIndex + 1;
      flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
      setCurrentIndex(nextIndex);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(autoScroll);
  }, [currentIndex]);

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.carouselContainer}>
      <Animated.FlatList
        ref={flatListRef}
        data={tierData}
        horizontal
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          // Calculate the scale for each card based on the scroll position
          const inputRange = [
            (index - 1) * FULL_SIZE,
            index * FULL_SIZE,
            (index + 1) * FULL_SIZE,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8], // Middle card is scaled to 1, side cards to 0.8
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8], // Fades in/out slightly
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[
                styles.card,
                {
                  transform: [{scale}], // Apply the scale transformation
                  opacity,
                },
              ]}>
              <Image
                source={item.image}
                style={styles.cardImage}
                resizeMode="contain"
              />
            </Animated.View>
          );
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        snapToInterval={FULL_SIZE} // Snaps to the full width of a card + spacing
        decelerationRate="fast"
        contentContainerStyle={{paddingHorizontal: (width - CARD_WIDTH) / 2}} // Center the cards
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{itemVisiblePercentThreshold: 50}}
      />

      {/* Pagination dots */}
      <View style={styles.dotsContainer}>
        {tierData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {backgroundColor: currentIndex === index ? 'black' : 'gray'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 0,
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    marginHorizontal: SPACING,
    height: CARD_WIDTH * 0.6, // Adjust the height of the card
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});

export default AutoSlideCarousel;
