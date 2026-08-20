import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

import { CheckCircleIcon } from '@/components/medimind/icons';
import { BodyText, Heading, Screen } from '@/components/medimind/ui';
import { Colors } from '@/constants/medimind-theme';

export default function AnalyzingScreen() {
  const spin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(spin, { toValue: 1, duration: 1000, easing: Easing.linear, useNativeDriver: true }),
    );
    loop.start();

    const timer = setTimeout(() => router.replace('/results'), 2200);
    return () => {
      loop.stop();
      clearTimeout(timer);
    };
  }, [spin]);

  const rotate = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });

  return (
    <Screen>
      <View style={styles.container}>
        <Animated.View style={[styles.spinner, { transform: [{ rotate }] }]} />
        <View style={{ alignItems: 'center', gap: 6 }}>
          <Heading level={4}>Analyzing your report…</Heading>
          <BodyText size={13} style={{ opacity: 0.65 }}>
            This usually takes a few seconds
          </BodyText>
        </View>
        <View style={styles.steps}>
          <View style={styles.stepRow}>
            <CheckCircleIcon size={18} color={Colors.accent2_700} strokeWidth={2.75} />
            <BodyText size={13}>Extracting data</BodyText>
          </View>
          <View style={styles.stepRow}>
            <CheckCircleIcon size={18} color={Colors.accent2_700} strokeWidth={2.75} />
            <BodyText size={13}>Matching known patterns</BodyText>
          </View>
          <View style={[styles.stepRow, { opacity: 0.5 }]}>
            <View style={styles.emptyCircle} />
            <BodyText size={13}>Identifying conditions</BodyText>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 28, paddingHorizontal: 36 },
  spinner: {
    width: 80,
    height: 80,
    borderRadius: 999,
    borderWidth: 5,
    borderColor: Colors.accent200,
    borderTopColor: Colors.accent,
  },
  steps: { width: '100%', gap: 10 },
  stepRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  emptyCircle: {
    width: 18,
    height: 18,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: Colors.divider,
  },
});
