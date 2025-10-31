import { useSyncRutActivo } from '@/hooks/use-sync-rut-activo';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, StyleSheet, Text, TouchableHighlight, View, SafeAreaView, StatusBar } from 'react-native';

export default function HomeScreen() {
  useSyncRutActivo();
  return (
    <>
      <StatusBar 
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Logo */}
          <Image
            source={require('@/assets/images/Furgo_Truck.png')}
            style={styles.logo}
            contentFit="contain"
          />

          {/* Botón Regístrate */}
          <Link href="/register" asChild>
            <TouchableHighlight
              underlayColor="#127067"
              style={styles.button}
            >
              <Text style={styles.buttonText}>Regístrate</Text>
            </TouchableHighlight>
          </Link>

          {/* Botón Ingresa */}
          <Link href="/login" asChild>
            <TouchableHighlight
              underlayColor="#127067"
              style={styles.button}
            >
              <Text style={styles.buttonText}>Ingresa</Text>
            </TouchableHighlight>
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#127067',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
    marginVertical: 10,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});