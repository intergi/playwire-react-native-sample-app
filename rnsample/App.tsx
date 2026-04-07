/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './Navigation.tsx';
import * as Sentry from "@sentry/react-native";

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  Sentry.init({
    dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
    sendDefaultPii: true,
  });

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
