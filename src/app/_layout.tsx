import { Caprasimo_400Regular } from '@expo-google-fonts/caprasimo';
import {
  Figtree_400Regular,
  Figtree_600SemiBold,
  Figtree_700Bold,
} from '@expo-google-fonts/figtree';
import { useFonts } from 'expo-font';
import { DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { Colors } from '@/constants/medimind-theme';

SplashScreen.preventAutoHideAsync();

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.bg,
    text: Colors.text,
    card: Colors.bg,
    border: Colors.divider,
    primary: Colors.accent,
  },
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Caprasimo_400Regular,
    Figtree_400Regular,
    Figtree_600SemiBold,
    Figtree_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={lightTheme}>
      <AnimatedSplashOverlay />
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.bg } }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding-upload" />
        <Stack.Screen name="onboarding-match" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="report-upload" options={{ presentation: 'card' }} />
        <Stack.Screen name="analyzing" />
        <Stack.Screen name="results" />
        <Stack.Screen name="doctors" />
        <Stack.Screen name="doctor/[id]" />
        <Stack.Screen name="booking" />
        <Stack.Screen name="confirmation" />
        <Stack.Screen name="chat" />
        <Stack.Screen name="notifications" />
      </Stack>
    </ThemeProvider>
  );
}
