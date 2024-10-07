import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import Logo from '../../assets/logo.svg';
import KhaoFitCoin from '../../assets/fitcoin.svg';
import CartIcon from '../../assets/cart.svg';
import MenuIcon from '../../assets/menu_icon.svg';
import HeartIcon from '../../assets/heart.svg';
import Carousel from '../../components/Carousel/Carousel';
import AutoSlideCarousel from './AutoSlideCarousel';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';
import {useNavigation} from '@react-navigation/native';
import Footer from '~/components/Footer/Footer';
import ProductModal from './ProductModal';

const {width} = Dimensions.get('window');

const meals = [
  {
    id: 1,
    title: 'Sub Sandwich With Grilled Mushroom',
    image: require('../../assets/burger.png'),
    discount: '60% OFF',
    price: '₹120',
    rating: 4.2,
    deliveryTime: '25-30 mins',
  },
  {
    id: 2,
    title: 'Egg White Omelet',
    image: require('../../assets/omlette.png'),
    discount: '50% OFF',
    price: '₹100',
    rating: 3.5,
    deliveryTime: '40-50 mins',
  },
  {
    id: 3,
    title: 'Double Patty Chicken Burger',
    image: require('../../assets/burger.png'),
    discount: 'ITEMS AT ₹150',
    rating: 4.8,
    deliveryTime: '40-50 mins',
  },
];

const categories = [
  {
    id: 1,
    title: 'Salad Bowls',
    image: require('../../assets/salad.png'),
  },
  {
    id: 2,
    title: 'Mini Meals',
    image: require('../../assets/mini.png'),
  },
  {
    id: 3,
    title: 'Meals',
    image: require('../../assets/meals.png'),
  },
  {
    id: 4,
    title: 'Shakes',
    image: require('../../assets/shakes.png'),
  },
];
const Homepage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Logo />
          <View
            style={{
              display: 'flex',
              gap: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('ReferEarn')}>
              <KhaoFitCoin width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <CartIcon width={28} height={28} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MenuIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for healthy food..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={require('../../assets/search.png')}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 14,
          paddingVertical: 10,
          backgroundColor: '#FFF',
        }}>
        <View>
          <Carousel />
        </View>

        {/* Custom Meals Section */}
        <View style={styles.mealSection}>
          <Text style={styles.sectionTitle}>Custom meals for you</Text>
          <View style={styles.mealGrid}>
            {meals.map(meal => (
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                key={meal.id}
                style={styles.mealCard}>
                <View>
                  <Image
                    source={meal.image}
                    resizeMode="cover"
                    style={styles.mealImage}
                  />
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{meal.discount}</Text>
                    {meal.price && (
                      <Text style={styles.priceText}>UPTO {meal.price}</Text>
                    )}
                  </View>
                </View>

                <TouchableOpacity style={styles.heartIcon}>
                  <HeartIcon width={24} height={24} />
                </TouchableOpacity>

                <Text style={styles.mealTitle}>{meal.title}</Text>

                <View style={styles.mealInfo}>
                  <View style={styles.ratingContainer}>
                    <Image
                      source={require('../../assets/star.png')}
                      resizeMode="contain"
                      style={{width: 16, height: 16}}
                    />
                    <Text style={styles.ratingText}>{meal.rating}</Text>
                  </View>
                  <Text style={styles.deliveryText}>{meal.deliveryTime}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Fuel Right, Feel Right</Text>
          <View style={styles.categoryGrid}>
            {categories.map(category => (
              <TouchableOpacity
                onPress={() => navigation.navigate('MenuPage')}
                key={category.id}
                style={styles.categoryCard}>
                <Image
                  source={category.image}
                  resizeMode="cover"
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryTitle}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Three Tiers, One Goal</Text>
          <AutoSlideCarousel />
        </View>

        {/* Custom Meals Section */}
        <View style={{marginTop: 20, marginBottom: 10}}>
          <Text style={styles.sectionTitle}>Fan Favorites</Text>
          <View style={styles.mealGrid}>
            {meals.map(meal => (
              <View key={meal.id} style={styles.mealCard}>
                <View>
                  <Image
                    source={meal.image}
                    resizeMode="cover"
                    style={styles.mealImage}
                  />
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{meal.discount}</Text>
                    {meal.price && (
                      <Text style={styles.priceText}>UPTO {meal.price}</Text>
                    )}
                  </View>
                </View>

                {/* Heart Icon */}
                <TouchableOpacity style={styles.heartIcon}>
                  <HeartIcon width={24} height={24} />
                </TouchableOpacity>

                {/* Meal Title */}
                <Text style={styles.mealTitle}>{meal.title}</Text>

                {/* Rating and Delivery Time */}
                <View style={styles.mealInfo}>
                  <View style={styles.ratingContainer}>
                    <Image
                      source={require('../../assets/star.png')}
                      resizeMode="contain"
                      style={{width: 16, height: 16}}
                    />
                    <Text style={styles.ratingText}>{meal.rating}</Text>
                  </View>
                  <Text style={styles.deliveryText}>{meal.deliveryTime}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={{marginBottom: 20}}>
          <Text style={styles.sectionTitle}>Your guide to perfect rest</Text>
          <Image
            source={require('../../assets/sleep.png')}
            resizeMode="contain"
            style={{width: '100%', height: 150}}
          />
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={styles.sectionTitle}>Hydrate smarter</Text>
          <Image
            source={require('../../assets/hydration.png')}
            resizeMode="contain"
            style={{width: '100%', height: 150}}
          />
        </View>
      </ScrollView>

      <ProductModal
        setModalVisible={setModalVisible}
        isModalVisible={isModalVisible}
      />
      <Footer />
    </>
  );
};

// Styles
const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginVertical: 16,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: 'black',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 8,
    color: 'black',
  },
  searchIcon: {
    paddingHorizontal: 8,
  },
  mealSection: {
    marginTop: -20,
  },
  sectionTitle: {
    fontWeight: '500',
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  mealGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mealCard: {
    width: (width - 48) / 3, // Adjust width to fit 3 items per row with padding
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'flex-start',
    marginBottom: 16,
    position: 'relative',
    overflow: 'hidden',
    paddingLeft: -8,
  },
  discountBadge: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    // backgroundColor: 'rgba(255, 165, 0, 0.9)',
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 2,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  priceText: {
    color: '#fff',
    fontSize: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 16,
    right: 10,
  },
  mealImage: {
    width: 110,
    height: 100,
    borderRadius: 14,
    marginBottom: 10,
  },
  mealTitle: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    color: 'black',
    lineHeight: 14,
    height: 30,
  },
  mealInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    width: '100%',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: 'gray',
  },
  deliveryText: {
    fontSize: 12,
    color: 'gray',
  },
  categorySection: {
    marginTop: 20,
  },

  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  categoryCard: {
    width: (width - 48) / 2 - 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: 'black',
  },
});

export default Homepage;
