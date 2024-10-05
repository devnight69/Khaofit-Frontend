import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const WIDTH = Dimensions.get('window').width;

const Footer = (props: any) => {
  const {state, descriptors, navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state?.routes?.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          // Icon and label settings based on route.name and isFocused
          const getIcon = () => {
            if (route.name === 'Home') {
              return isFocused ? (
                <Image
                  source={require('~/assets/home_blue.png')}
                  style={styles.icon}
                />
              ) : (
                <Image
                  source={require('~/assets/home_gray.png')}
                  style={styles.icon}
                />
              );
            } else if (route.name === 'Wallet') {
              return isFocused ? (
                <Image
                  source={require('~/assets/wallet_blue.png')}
                  style={styles.icon}
                />
              ) : (
                <Image
                  source={require('~/assets/wallet_gray.png')}
                  style={styles.icon}
                />
              );
            } else if (route.name === 'Profile') {
              return isFocused ? (
                <Image
                  source={require('~/assets/profile_blue.png')}
                  style={styles.icon}
                />
              ) : (
                <Image
                  source={require('~/assets/profile_gray.png')}
                  style={styles.icon}
                />
              );
            }
          };

          return (
            <TouchableOpacity
              key={index}
              style={styles.tabButton}
              onPress={onPress}
              onLongPress={onLongPress}>
              {isFocused && <View style={styles.indicator} />}

              <View style={styles.tabContent}>
                <View style={[styles.iconContainer]}>{getIcon()}</View>
                <Text style={[styles.tabLabel]}>{route.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopLeftRadius: RFValue(5),
    borderTopRightRadius: RFValue(5),
    overflow: 'hidden',
  },
  tabBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  tabButton: {
    width: WIDTH * 0.24,
    alignItems: 'center',
  },
  indicator: {
    width: '100%',
    height: 2,
    // backgroundColor: COLOR.DarkBlue,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    top: 0,
  },
  tabContent: {
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 2,
  },

  tabLabel: {
    marginTop: -2,
    color: '#6b7280',
    fontWeight: '600',
    fontSize: 12,
  },

  icon: {
    width: RFValue(20),
    height: RFValue(20),
  },
});

export default Footer;
