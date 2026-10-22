import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Alert 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// -------------------------------------------------------------
// 1. HALAMAN LOGIN
// -------------------------------------------------------------
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Peringatan', 'Harap masukkan email dan password!');
      return;
    }
    navigation.navigate('Home', { userEmail: email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginCard}>
        <Text style={styles.appTitle}>MY APP</Text>
        <Text style={styles.subTitle}>UTS MOBILE 1</Text>

        <TextInput
          style={styles.input}
          placeholder="INPUT EMAIL"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="INPUT PASSWORD"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
          <Text style={styles.buttonPrimaryText}>TOMBOL LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// -------------------------------------------------------------
// 2. HALAMAN HOME PAGE
// -------------------------------------------------------------
function HomeScreen({ route, navigation }) {
  const { userEmail } = route.params || {};

  const handleMenuClick = (namaMenu, deskripsi) => {
    Alert.alert(namaMenu, deskripsi);
  };

  return (
    <View style={styles.containerHome}>
      <Text style={styles.homeHeader}>HOME PAGE</Text>

      {/* Profil Card */}
      <View style={styles.profileCard}>
        <Image
          source={require('./assets/regi.png')} 
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Mariska Anggraeni</Text>
        <Text style={styles.profileSub}>Informatika - FICT 2C</Text>
        <Text style={styles.profileEmail}>{userEmail || 'mariska@horizon.ac.id'}</Text>
      </View>

      {/* Grid 4 Tombol Menu */}
      <View style={styles.menuContainer}>
        <View style={styles.menuRow}>
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => handleMenuClick('MENU 1: Jadwal Kuliah', 'Jadwal Hari Ini: Pemrograman Mobile 1')}
          >
            <Text style={styles.menuTitle}>MENU 1</Text>
            <Text style={styles.menuSub}>Jadwal Kuliah</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => handleMenuClick('MENU 2: Nilai Akademik', 'IPK Semester Ini: 3.90')}
          >
            <Text style={styles.menuTitle}>MENU 2</Text>
            <Text style={styles.menuSub}>Nilai Akademik</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuRow}>
          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => handleMenuClick('MENU 3: Presensi', 'Kehadiran: 100%')}
          >
            <Text style={styles.menuTitle}>MENU 3</Text>
            <Text style={styles.menuSub}>Presensi</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuButton}
            onPress={() => handleMenuClick('MENU 4: Pengaturan', 'Pengaturan Akun')}
          >
            <Text style={styles.menuTitle}>MENU 4</Text>
            <Text style={styles.menuSub}>Pengaturan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tombol Logout */}
      <TouchableOpacity 
        style={styles.buttonLogout} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonLogoutText}>TOMBOL LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

// -------------------------------------------------------------
// MAIN STACK NAVIGATION
// -------------------------------------------------------------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// -------------------------------------------------------------
// STYLESHEET
// -------------------------------------------------------------
const styles = StyleSheet.create({
  // Layout Utama Login
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loginCard: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3, // Bayangan Android
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A2530',
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A90E2',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 14,
  },
  buttonPrimary: {
    width: '100%',
    height: 48,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 5,
  },
  buttonPrimaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFFFFF',
  },

  // Layout Utama Home
  containerHome: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  homeHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A2530',
    marginBottom: 20,
  },
  profileCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#4A90E2',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A2530',
  },
  profileSub: {
    fontSize: 12,
    color: '#4A90E2',
    fontWeight: '600',
    marginTop: 2,
  },
  profileEmail: {
    fontSize: 12,
    color: '#7F8C8D',
    marginTop: 2,
  },
  menuContainer: {
    width: '100%',
    marginBottom: 10,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  menuButton: {
    width: '48%',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  menuTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1A2530',
  },
  menuSub: {
    fontSize: 11,
    color: '#7F8C8D',
    marginTop: 2,
  },
  buttonLogout: {
    width: '100%',
    height: 48,
    backgroundColor: '#E74C3C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonLogoutText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});