import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const BMICaloriesPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Based on your BMI and goal, you should consume:
      </Text>
      <Image
        source={require('../../assets/whey-image.png')}
        style={styles.imageTop}
      />
      <Text style={styles.calorieText}>250 - 500 calories</Text>
      <Image
        source={require('../../assets/dumbbell-image.png')}
        style={styles.imageBottom}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AEEF', // updated background color
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#ffffff',
    marginHorizontal: 30,
  },
  calorieText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginVertical: 20,
  },
  imageTop: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    top: 40,
    right: 30,
  },
  imageBottom: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 40,
    left: 30,
  },
});

export default BMICaloriesPage;
