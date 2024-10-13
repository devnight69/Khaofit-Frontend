import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '~/components/Button/Button';
import Typography from '~/components/Typography/Typography';

const Profile = () => {
  const userDetails = {
    imageUrl: 'https://via.placeholder.com/150',
    name: 'Jane Doe',
    age: 28,
    gender: 'Female',
    mobileNumber: '+1 234 567 890',
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* User Info Section */}
        <View style={styles.profileContainer}>
          <Image
            source={{uri: userDetails.imageUrl}}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Typography style={styles.userName}>{userDetails.name}</Typography>
            <Typography style={styles.userDetail}>
              Age: {userDetails.age}
            </Typography>
            <Typography style={styles.userDetail}>
              Gender: {userDetails.gender}
            </Typography>
            <Typography style={styles.userDetail}>
              Mobile: {userDetails.mobileNumber}
            </Typography>
          </View>
        </View>

        {/* Options Cards */}
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
              <Icon name="location-outline" size={24} color="#0A9AB2" />
              <Typography style={styles.cardText}>Manage Address</Typography>
            </View>
            <Icon name="chevron-forward-outline" size={24} color="#0A9AB2" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
              <Icon name="person-outline" size={24} color="#0A9AB2" />
              <Typography style={styles.cardText}>Update Profile</Typography>
            </View>
            <Icon name="chevron-forward-outline" size={24} color="#0A9AB2" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
              <Icon name="key-outline" size={24} color="#0A9AB2" />
              <Typography style={styles.cardText}>Change Password</Typography>
            </View>
            <Icon name="chevron-forward-outline" size={24} color="#0A9AB2" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
              <Icon name="notifications-outline" size={24} color="#0A9AB2" />
              <Typography style={styles.cardText}>
                Notification Settings
              </Typography>
            </View>
            <Icon name="chevron-forward-outline" size={24} color="#0A9AB2" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
              <Icon name="card-outline" size={24} color="#0A9AB2" />
              <Typography style={styles.cardText}>Payment Methods</Typography>
            </View>
            <Icon name="chevron-forward-outline" size={24} color="#0A9AB2" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A9AB2',
  },
  userDetail: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    color: '#0A9AB2',
    marginLeft: 10,
  },
});

export default Profile;
