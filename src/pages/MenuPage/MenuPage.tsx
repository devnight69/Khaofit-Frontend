import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const shakeData = [
  {
    id: '1',
    title: 'Oat Milkshake',
    rating: '4.3',
    time: '36-40mins',
    image: require('../../assets/oat_milkshake.png'),
    description:
      'A creamy, oat-based milkshake packed with protein. Your star meal provides the energy needed.',
  },
  {
    id: '2',
    title: 'Mixed Fruit Shake',
    rating: '4.5',
    time: '35-40mins',
    image: require('../../assets/oat_milkshake.png'),
    description:
      'A refreshing blend of fruits to revitalize your senses and recharge your body.',
  },
  {
    id: '3',
    title: 'Orange Juice',
    rating: '4.6',
    time: '38-40mins',
    image: require('../../assets/oat_milkshake.png'),
    description:
      'Fresh and vitamin-packed orange juice for a healthy start to your day.',
  },
  {
    id: '4',
    title: 'Pineapple Juice',
    rating: '4.2',
    time: '36-40mins',
    image: require('../../assets/oat_milkshake.png'),
    description: 'A tropical, sweet juice for a refreshing experience anytime.',
  },
  {
    id: '5',
    title: 'Mosambi Juice',
    rating: '4.7',
    time: '36-40mins',
    image: require('../../assets/oat_milkshake.png'),
    description:
      'Citrusy and light, a perfect blend of vitamin C and hydration.',
  },
  {
    id: '6',
    title: 'Chia Seed in Lemon Water',
    rating: '4.7',
    time: '36-40mins',
    image: require('../../assets/oat_milkshake.png'),
    description:
      'A refreshing drink with chia seeds and lemon, keeping you hydrated and energized.',
  },
];

const MenuPage = () => {
  const renderItem = ({item}: any) => (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardRating}>
          <Image
            source={require('../../assets/star.png')}
            resizeMode="contain"
            style={{width: 16, height: 16}}
          />{' '}
          {item.rating} (4.0k+) · {item.time}
        </Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <View
          style={{
            width: '100%',
            justifyContent: 'flex-end',
            display: 'flex',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Section */}
      {/* <View style={styles.topSection}> */}
      <Image
        source={require('../../assets/shakes_top_image.png')}
        resizeMode="contain"
        style={{width: '100%', height: 206}}
      />
      {/* </View> */}
      <Text style={styles.sectionTitle}>SHAKES</Text>
      <Text style={styles.sectionSubtitle}>
        Fuel your fitness cravings with these refreshing juices and delicious
        healthy shakes.
      </Text>

      {/* List Section */}
      <FlatList
        data={shakeData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
    paddingHorizontal: 16,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 140,
    height: 140,
    borderRadius: 8,
  },
  cardDetails: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardRating: {
    fontSize: 12,
    color: '#666',
    marginVertical: 4,
  },
  cardDescription: {
    fontSize: 12,
    color: '#888',
  },
  addButton: {
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 12,
    width: 80,
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
  },
  addButtonText: {
    color: '#66A548',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default MenuPage;
