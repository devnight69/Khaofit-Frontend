import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MenuIcon from '../../assets/menu.svg';

const Homepage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <MenuIcon width={24} height={24} />
        <View style={styles.locationInfo}>
          <Text style={styles.deliveryText}>DELIVER AT</Text>
          <Text style={styles.locationText}>Airoli, Navi Mumbai, India</Text>
          <Text style={styles.etaText}>ETA: Today 1:30 pm to 2:00 pm</Text>
        </View>
      </View>

      <Text style={styles.exploreText}>Explore menu</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#64B5F6',
    padding: 10,
    alignItems: 'center',
    gap: 10,
  },
  locationInfo: {
    flex: 1,
    marginLeft: 10,
  },
  deliveryText: {
    color: '#fff',
    fontSize: 10,
  },
  locationText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  etaText: {
    color: '#fff',
    fontSize: 12,
  },
  rewardsContainer: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    alignItems: 'center',
  },
  rewardsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rewardsPoints: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6D00',
  },
  rewardsLevel: {
    fontSize: 14,
    color: '#808080',
  },
  carouselItem: {
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  carouselImage: {
    width: 250,
    height: 120,
  },
  featuredTitle: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  exploreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingLeft: 10,
    color: 'black',
  },
  menuRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  menuImage: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  floatingButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
  floatingButton: {
    backgroundColor: '#FF6D00',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '45%',
  },
  floatingButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Homepage;
