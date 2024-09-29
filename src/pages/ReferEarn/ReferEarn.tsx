import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient'; // Or any other gradient package
import Dropdown from '../../assets/dropdown.svg';
import KhaoFitCoin from '../../assets/fitcoin.svg';

function ReferEarn() {
  return (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/refer_bg.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          {/* Header */}
          {/* <View style={styles.header}>
          <Logo style={styles.logo} />
          <Image
            source={require('../../assets/hand_phone.png')}
            style={styles.handImage}
          />
        </View> */}

          {/* Balance Section */}
          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Text style={styles.balanceValue}>600</Text>
              <KhaoFitCoin width={20} height={20} />
            </View>
          </View>

          {/* Transaction History */}
          <TouchableOpacity style={styles.transactionDropdown}>
            <Text style={styles.dropdownLabel}>Transaction History</Text>
            <Dropdown />
          </TouchableOpacity>

          {/* Friends Joined and Coins From Referral */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Friends Joined</Text>
            <Text style={styles.infoValue}>22</Text>
          </View>

          <View style={[styles.infoRow, {marginTop: 10}]}>
            <Text style={styles.infoLabel}>Coins From Referral</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Text style={styles.balanceValue}>120</Text>
              <KhaoFitCoin width={20} height={20} />
            </View>
          </View>

          {/* Referral Code Section */}
          <View style={styles.referralSection}>
            <Text style={styles.referralLabel}>Your Referral Code</Text>
            <Text style={styles.referralCode}>RAMA123</Text>
          </View>

          {/* Invite Now Button */}
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.inviteText}>Invite Now</Text>
            {/* Add share icon */}
          </TouchableOpacity>

          {/* Footer Note */}
          <Text style={styles.footerNote}>
            Invite a friend to join khao.fit and earn together! On each
            successful referral, both earn 5% Fitcoins.
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // This will cover the entire screen
    marginTop: -20,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 20,
    marginTop: 340,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  handImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  balanceSection: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dotted',
    borderCurve: 'continuous',
    padding: 10,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#fff',
  },
  balanceValue: {
    fontSize: 18,
    color: '#F9D342', // Gold color
  },
  transactionDropdown: {
    marginVertical: 10,
    width: '100%',
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dotted',
    borderCurve: 'continuous',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownLabel: {
    color: '#fff',
    fontSize: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // paddingHorizontal: 20,
    // marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dotted',
    borderCurve: 'continuous',
    padding: 10,
  },
  infoLabel: {
    color: '#fff',
    fontSize: 16,
  },
  infoValue: {
    color: '#F9D342', // Gold color
    fontSize: 16,
  },
  referralSection: {
    marginVertical: 20,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dotted',
    borderCurve: 'continuous',
    width: '100%',
    padding: 20,
  },
  referralLabel: {
    color: '#fff',
    fontSize: 16,
  },
  referralCode: {
    color: '#F9D342', // Gold color
    fontSize: 18,
    fontWeight: 'bold',
  },
  inviteButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    textAlign: 'center',
  },
  inviteText: {
    fontSize: 16,
    color: '#00AEEF',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    fontWeight: '600',
  },
  footerNote: {
    marginTop: 20,
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ReferEarn;
