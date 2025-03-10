import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');

  const toggleNotifications = () => setNotifications(previousState => !previousState);
  const toggleDarkMode = () => setDarkMode(previousState => !previousState);

  const renderSettingItem = ({ icon, title, value, onPress, isSwitch }) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={onPress}
      disabled={isSwitch}
    >
      <View style={styles.settingItemLeft}>
        <Ionicons name={icon} size={24} color="#333" />
        <Text style={styles.settingItemText}>{title}</Text>
      </View>
      {isSwitch ? (
        <Switch
          value={value}
          onValueChange={onPress}
          trackColor={{ false: '#ddd', true: '#007AFF' }}
          thumbColor="#fff"
        />
      ) : (
        <View style={styles.settingItemRight}>
          <Text style={styles.settingItemValue}>{value}</Text>
          <Ionicons name="chevron-forward" size={24} color="#ccc" />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        {renderSettingItem({
          icon: 'notifications-outline',
          title: 'Push Notifications',
          value: notifications,
          onPress: toggleNotifications,
          isSwitch: true,
        })}
        {renderSettingItem({
          icon: 'moon-outline',
          title: 'Dark Mode',
          value: darkMode,
          onPress: toggleDarkMode,
          isSwitch: true,
        })}
        {renderSettingItem({
          icon: 'language-outline',
          title: 'Language',
          value: language,
          onPress: () => {},
        })}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        {renderSettingItem({
          icon: 'information-circle-outline',
          title: 'App Version',
          value: '1.0.0',
        })}
        {renderSettingItem({
          icon: 'document-text-outline',
          title: 'Terms of Service',
          value: '',
          onPress: () => {},
        })}
        {renderSettingItem({
          icon: 'shield-checkmark-outline',
          title: 'Privacy Policy',
          value: '',
          onPress: () => {},
        })}
      </View>
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
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  settingItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingItemValue: {
    fontSize: 16,
    color: '#666',
    marginRight: 10,
  },
});

export default SettingsScreen;