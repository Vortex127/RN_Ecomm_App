import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleInputChange = (field, value) => {
    setShippingInfo(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePlaceOrder = () => {
    // Here you would typically handle order submission
    navigation.navigate('OrderConfirmation');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Checkout</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Address</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={shippingInfo.fullName}
              onChangeText={(text) => handleInputChange('fullName', text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={shippingInfo.address}
              onChangeText={(text) => handleInputChange('address', text)}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputContainer, { flex: 2, marginRight: 10 }]}>
              <TextInput
                style={styles.input}
                placeholder="City"
                value={shippingInfo.city}
                onChangeText={(text) => handleInputChange('city', text)}
              />
            </View>
            <View style={[styles.inputContainer, { flex: 1, marginRight: 10 }]}>
              <TextInput
                style={styles.input}
                placeholder="State"
                value={shippingInfo.state}
                onChangeText={(text) => handleInputChange('state', text)}
              />
            </View>
            <View style={[styles.inputContainer, { flex: 1 }]}>
              <TextInput
                style={styles.input}
                placeholder="ZIP Code"
                value={shippingInfo.zipCode}
                onChangeText={(text) => handleInputChange('zipCode', text)}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={shippingInfo.phone}
              onChangeText={(text) => handleInputChange('phone', text)}
              keyboardType="phone-pad"
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.paymentOptions}>
          <TouchableOpacity
            style={[styles.paymentOption, paymentMethod === 'card' && styles.selectedPayment]}
            onPress={() => setPaymentMethod('card')}
          >
            <Ionicons name="card-outline" size={24} color={paymentMethod === 'card' ? '#007AFF' : '#666'} />
            <Text style={[styles.paymentText, paymentMethod === 'card' && styles.selectedPaymentText]}>Credit Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.paymentOption, paymentMethod === 'paypal' && styles.selectedPayment]}
            onPress={() => setPaymentMethod('paypal')}
          >
            <Ionicons name="logo-paypal" size={24} color={paymentMethod === 'paypal' ? '#007AFF' : '#666'} />
            <Text style={[styles.paymentText, paymentMethod === 'paypal' && styles.selectedPaymentText]}>PayPal</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>$299.98</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Shipping</Text>
          <Text style={styles.summaryValue}>$9.99</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Tax</Text>
          <Text style={styles.summaryValue}>$24.00</Text>
        </View>
        <View style={[styles.summaryItem, styles.totalItem]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>$333.97</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  form: {
    gap: 15,
  },
  inputContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  input: {
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
  },
  paymentOptions: {
    flexDirection: 'row',
    gap: 15,
  },
  paymentOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#f5f5f5',
  },
  selectedPayment: {
    borderColor: '#007AFF',
    backgroundColor: '#fff',
  },
  paymentText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
  selectedPaymentText: {
    color: '#007AFF',
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    color: '#333',
  },
  totalItem: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  placeOrderButton: {
    margin: 20,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;