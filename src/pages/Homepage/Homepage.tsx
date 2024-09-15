import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MenuIcon from '../../assets/menu.svg';
import MealsIcon from '../../assets/food.svg';
import Typography from '../../components/Typography/Typography';
import FacebookIcon from '../../assets/fb.svg';
import InstagramIcon from '../../assets/insta.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import TwitterIcon from '../../assets/x.svg';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';

// Menu items
const menuItems = [
  {title: 'Meals', icon: MealsIcon},
  {title: 'Meal Dabba', icon: MealsIcon},
  {title: 'Sabji', icon: MealsIcon},
  {title: 'Roti', icon: MealsIcon},
  {title: 'Paratha', icon: MealsIcon},
  {title: 'Dal, Rice', icon: MealsIcon},
  {title: 'Stuffed Paratha', icon: MealsIcon},
  {title: 'Sides', icon: MealsIcon},
  {title: 'Desserts', icon: MealsIcon},
];

// What's New items
const whatsNewItems = [
  {
    title: 'Punjabi Rajma',
    price: '₹55',
    image: MealsIcon, // Assuming the image is also an SVG
    tags: ['New'],
    custom: true,
  },
  {
    title: 'Kadai Paneer',
    price: '₹65',
    image: MealsIcon, // Assuming the image is also an SVG
    tags: ['New', 'Must Try'],
    custom: true,
  },
  {
    title: 'Chilli Aloo',
    price: '₹65',
    image: MealsIcon, // Assuming the image is also an SVG
    tags: ['New', 'Must Try'],
    custom: true,
  },
  {
    title: 'Mutton Curry',
    price: '₹65',
    image: MealsIcon, // Assuming the image is also an SVG
    tags: ['New', 'Must Try'],
    custom: true,
  },
];

const bestsellers = [
  {
    title: 'Aloo Paratha Meal',
    price: '₹99',
    image: MealsIcon, // Use the actual SVG component
    description:
      'Aloo Paratha [2pc] + Dahi [100ml] + Achar + Chutney (Any 1) + Muk...',
    tags: ['Bestseller'],
    custom: true,
  },
  {
    title: 'Aloo Paratha Meal',
    price: '₹99',
    image: MealsIcon, // Use the actual SVG component
    description:
      'Aloo Paratha [2pc] + Dahi [100ml] + Achar + Chutney (Any 1) + Muk...',
    tags: ['Bestseller'],
    custom: true,
  },
  {
    title: 'Aloo Paratha Meal',
    price: '₹99',
    image: MealsIcon, // Use the actual SVG component
    description:
      'Aloo Paratha [2pc] + Dahi [100ml] + Achar + Chutney (Any 1) + Muk...',
    tags: ['Bestseller'],
    custom: true,
  },
];

// Render function for Bestsellers section
const BestsellerCard = () => {
  return (
    <View style={styles.bestsellerContainer}>
      <Text style={styles.whatsNewTitle}>Best Seller's</Text>
      {bestsellers.map((item, index) => {
        const IconComponent = item.image;
        return (
          <View key={index} style={styles.bestsellerItem}>
            {/* Image Container */}
            <View style={styles.imageContainer}>
              <IconComponent width={100} height={80} style={{marginTop: -4}} />
              {/* Positioned + ADD button */}
              <Button
                title="+ ADD"
                onPress={() => {}}
                width={'auto'}
                height={34}
                borderRadius={10}
              />
            </View>

            {/* Bestseller Information */}
            <View style={styles.bestsellerInfo}>
              <View style={styles.tagContainer}>
                {/* Green Icon */}
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderWidth: 2,
                    borderColor: 'green',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderRadius: 50,
                      backgroundColor: 'green',
                      width: 8,
                      height: 8,
                    }}></View>
                </View>
                {/* Bestseller Tag */}
                <Text style={styles.bestsellerTag}>{item.tags[0]}</Text>
              </View>
              <Text style={styles.dishTitle}>{item.title}</Text>
              <Text style={{color: 'black'}}>{item.description}</Text>
              <Text style={[styles.priceText, {paddingTop: 6, fontSize: 20}]}>
                {item.price}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const Homepage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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

      {/* Explore Menu */}
      <Text style={styles.exploreText}>Explore menu</Text>
      <Typography
        children="Choose from a healthy range of items"
        style={{
          fontWeight: '400',
          fontSize: 14,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      />
      <View style={styles.menuGrid}>
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <View key={index} style={styles.menuItem}>
              <TouchableOpacity onPress={() => navigation.navigate('MenuPage')}>
                <IconComponent width={140} height={80} />
              </TouchableOpacity>
              <Text style={styles.menuTitle}>{item.title}</Text>
            </View>
          );
        })}
      </View>

      {/* What's New Section */}
      <Text style={styles.whatsNewTitle}>What's New</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.whatsNewContainer}>
        {whatsNewItems.map((item, index) => {
          const IconComponent = item.image;
          return (
            <View key={index} style={styles.whatsNewItem}>
              <IconComponent width={160} height={120} style={{marginTop: -4}} />
              <View
                style={{
                  height: 16,
                  width: 16,
                  borderWidth: 2,
                  borderColor: 'green',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  left: 6,
                  top: 6,
                  backgroundColor: '#FFF',
                }}>
                <View
                  style={{
                    borderRadius: 50,
                    backgroundColor: 'green',
                    width: 8,
                    height: 8,
                  }}></View>
              </View>
              <View style={styles.whatsNewInfo}>
                <View style={styles.tagContainer}>
                  {item.tags.map((tag, i) => (
                    <Text key={i} style={styles.tagText}>
                      {tag}
                    </Text>
                  ))}
                </View>
                <Text style={styles.dishTitle}>{item.title}</Text>
                <Text style={styles.priceText}>{item.price}</Text>
                <Button
                  title="+ ADD"
                  onPress={() => {}}
                  width={'auto'}
                  height={36}
                  borderRadius={10}
                />
                {item.custom && (
                  <Text style={styles.customizableText}>customizable</Text>
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* Bestsellers Section */}
      <BestsellerCard />

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Happiness is Homemade :)</Text>
        <Text style={styles.footerSubText}>Made with ❤️ by Khao.Fit</Text>

        {/* Social Media Icons */}
        <View style={styles.socialMediaContainer}>
          <TouchableOpacity>
            <FacebookIcon width={30} height={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <InstagramIcon width={30} height={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <TwitterIcon width={30} height={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <LinkedInIcon width={30} height={30} />
          </TouchableOpacity>
        </View>
      </View>
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
  exploreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    paddingLeft: 10,
    color: 'black',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  menuItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  // Styles for What's New section
  whatsNewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingLeft: 10,
    color: 'black',
  },
  whatsNewContainer: {
    paddingLeft: 10,
  },
  whatsNewItem: {
    width: 160,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: {width: 0, height: 2}, // For iOS shadow
    shadowOpacity: 0.25, // For iOS shadow
    shadowRadius: 3.84, // For iOS shadow
    marginBottom: 20,
  },

  whatsNewInfo: {
    padding: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  tagText: {
    backgroundColor: '#E91E63',
    color: '#fff',
    fontSize: 10,
    paddingHorizontal: 5,
    borderRadius: 3,
    marginRight: 5,
  },
  dishTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  priceText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 4,
    alignItems: 'center',
    width: 'auto',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  customizableText: {
    fontSize: 10,
    color: '#757575',
    marginTop: 5,
  },

  bestsellerContainer: {
    paddingHorizontal: 10,
  },
  bestsellerItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    position: 'relative',
    width: 100,
    height: 80,
  },
  bestsellerInfo: {
    flex: 1,
    paddingLeft: 10,
    width: 'auto',
  },

  bestsellerTag: {
    backgroundColor: '#FF9800',
    color: '#fff',
    fontSize: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginLeft: 5, // Add some space between the veg icon and text
  },

  descriptionText: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 5,
  },

  // Footer styles
  footerContainer: {
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#757575',
  },
  footerSubText: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 20,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
});

export default Homepage;
