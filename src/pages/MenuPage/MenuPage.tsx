import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LeftArrow from '../../assets/leftarrow.svg';
import Button from '../../components/Button/Button';
import FoodIcon from '../../assets/food.svg';
import ViewItemDetails from './ViewItemDetails';
import AddItemInCartModal from './AddItemInCartModal';

// Sample MealCard Component
const MealCard = ({meal, setShowModal, setShowAddItemModal}: any) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.leftSection}>
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
          <Text style={styles.mealName}>{meal.name}</Text>
          <Text style={styles.mealDescription}>{meal.description}</Text>
          <Text style={styles.mealPrice}>₹{meal.price}</Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <FoodIcon />
          </TouchableOpacity>
          <View style={{position: 'absolute', bottom: -26, left: 14}}>
            <Button
              title="+ ADD"
              onPress={() => setShowAddItemModal(true)}
              width={'auto'}
              height={36}
              borderRadius={10}
            />
          </View>
        </View>
      </View>

      <Text style={styles.customizableText}>customizable</Text>
    </View>
  );
};

function MenuPage() {
  const [selectedMenu, setSelectedMenu] = useState('MEALS');

  const menuItems = ['MEALS', 'MEAL DABBA', 'SABJI', 'ROTI', 'PARATHA'];

  const meals = [
    {
      name: 'Kadai Paneer Meal Dabba',
      description: 'Kadai Paneer [150ml] + Phulka [3] + Dal [300ml] + ... More',
      price: 209,
    },
    {
      name: 'Paneer Makhni Meal Dabba',
      description:
        'Paneer Makhni [150ml] + Phulka [3] + Dal [300ml] + ... More',
      price: 199,
    },
    {
      name: 'Paneer Makhni Meal Dabba',
      description:
        'Paneer Makhni [150ml] + Phulka [3] + Dal [300ml] + ... More',
      price: 199,
    },
    {
      name: 'Paneer Makhni Meal Dabba',
      description:
        'Paneer Makhni [150ml] + Phulka [3] + Dal [300ml] + ... More',
      price: 199,
    },
    {
      name: 'Paneer Makhni Meal Dabba',
      description:
        'Paneer Makhni [150ml] + Phulka [3] + Dal [300ml] + ... More',
      price: 199,
    },
    {
      name: 'Paneer Makhni Meal Dabba',
      description:
        'Paneer Makhni [150ml] + Phulka [3] + Dal [300ml] + ... More',
      price: 199,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
      <View style={styles.topBar}>
        <LeftArrow width={24} height={24} />
        <View style={styles.locationInfo}>
          <Text style={styles.deliveryText}>DELIVER AT</Text>
          <Text style={styles.locationText}>Airoli, Navi Mumbai, India</Text>
          <Text style={styles.etaText}>ETA: Today 1:30 pm to 2:00 pm</Text>
        </View>
        <Text style={styles.searchIcon}>🔍</Text>
      </View>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.menuSlider}
          contentContainerStyle={styles.menuItemsContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedMenu(item)}>
              <Text
                style={[
                  styles.menuItem,
                  selectedMenu === item ? styles.selectedMenuItem : null,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.mealsContainer}>
        {meals.map((meal, index) => (
          <MealCard
            key={index}
            meal={meal}
            setShowModal={setShowModal}
            setShowAddItemModal={setShowAddItemModal}
          />
        ))}
      </ScrollView>
      <ViewItemDetails showModal={showModal} setShowModal={setShowModal} />
      <AddItemInCartModal
        visible={showAddItemModal}
        onClose={() => setShowAddItemModal(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  searchIcon: {
    color: '#fff',
    fontSize: 18,
    padding: 5,
  },
  menuSlider: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    height: 'auto',
  },
  menuItemsContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    height: 'auto',
  },
  menuItem: {
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000',
    paddingBottom: 10, // Add some space for the underline
    borderBottomWidth: 2, // Width of the underline
    borderBottomColor: 'transparent', // Default underline color (hidden)
  },
  selectedMenuItem: {
    fontWeight: 'bold',
    borderBottomColor: '#64B5F6', // Color of the underline
  },
  mealsContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  // Styles for Meal Card
  cardContainer: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 4,
  },
  leftSection: {
    flex: 1,
  },
  mealName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  mealDescription: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 5,
  },
  mealPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    // SVG is used for add button
  },
  customizableText: {
    fontSize: 12,
    color: '#757575',
    textAlign: 'right',
    marginTop: 5,
    marginRight: 12,
  },
});

export default MenuPage;
