import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      navigation.replace('Main');
    }
  };

  return (
    <View className="flex-1 bg-white px-8 pt-16">
      <View className="items-center mt-12 mb-12">
        <Text className="text-3xl font-bold text-gray-800 mb-3">Welcome Back</Text>
        <Text className="text-base text-gray-600">Sign in to continue shopping</Text>
      </View>

      <View className="flex-1 space-y-6">
        <View className="space-y-5">
          <View className="flex-row items-center border-2 border-gray-200 rounded-xl px-4 py-4 focus-within:border-blue-500">
            <Ionicons name="mail-outline" size={24} color="#666" />
            <TextInput
              className="flex-1 ml-3 text-base text-gray-800"
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError('');
              }}
            />
          </View>
          {emailError ? <Text className="text-red-500 text-sm px-1">{emailError}</Text> : null}

          <View className="flex-row items-center border-2 border-gray-200 rounded-xl px-4 py-4 focus-within:border-blue-500">
            <Ionicons name="lock-closed-outline" size={24} color="#666" />
            <TextInput
              className="flex-1 ml-3 text-base text-gray-800"
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError('');
              }}
            />
            <TouchableOpacity
              className="p-2"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color="#666"
              />
            </TouchableOpacity>
          </View>
          {passwordError ? <Text className="text-red-500 text-sm px-1">{passwordError}</Text> : null}
        </View>

        <TouchableOpacity
          className="self-end mb-2"
          onPress={() => console.log('Forgot password')}
        >
          <Text className="text-blue-500 text-base font-medium">Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-500 rounded-xl py-4 shadow-md active:bg-blue-600"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg font-semibold text-center">Login</Text>
        </TouchableOpacity>

        <View className="flex-row items-center my-6">
          <View className="flex-1 h-[1px] bg-gray-200" />
          <Text className="text-gray-500 mx-4 text-base">OR</Text>
          <View className="flex-1 h-[1px] bg-gray-200" />
        </View>

        <View className="flex-row justify-between space-x-4">
          <TouchableOpacity className="flex-1 flex-row items-center justify-center py-4 rounded-xl border-2 border-gray-200 active:bg-gray-50">
            <Ionicons name="logo-google" size={24} color="#DB4437" />
            <Text className="text-base text-gray-800 ml-3 font-medium">Google</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-1 flex-row items-center justify-center py-4 rounded-xl border-2 border-gray-200 active:bg-gray-50">
            <Ionicons name="logo-facebook" size={24} color="#4267B2" />
            <Text className="text-base text-gray-800 ml-3 font-medium">Facebook</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-base text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text className="text-base text-blue-500 font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;