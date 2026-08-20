import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { HeartPulseIcon } from '@/components/medimind/icons';
import { Heading, BodyText } from '@/components/medimind/ui';
import { Colors, Radius, Shadow } from '@/constants/medimind-theme';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding-upload');
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.badge, Shadow.md]}>
        <HeartPulseIcon size={46} color={Colors.white} strokeWidth={2.75} />
      </View>
      <Heading level={2} color={Colors.accent800}>
        MediMind
      </Heading>
      <BodyText color={Colors.accent800} size={13.5} style={{ opacity: 0.7 }}>
        Your reports, understood.
      </BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
    backgroundColor: Colors.accent100,
  },
  badge: {
    width: 96,
    height: 96,
    borderRadius: Radius.pill,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
