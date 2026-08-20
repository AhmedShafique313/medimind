import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { DoctorMatchIcon } from '@/components/medimind/icons';
import { BodyText, Button, Heading, Screen } from '@/components/medimind/ui';
import { Colors, Radius } from '@/constants/medimind-theme';

export default function OnboardingMatchScreen() {
  return (
    <Screen>
      <View style={styles.skipRow} />

      <View style={styles.body}>
        <View style={styles.iconCircle}>
          <DoctorMatchIcon size={72} color={Colors.accent700} strokeWidth={2.75} />
        </View>
        <View style={{ gap: 10, alignItems: 'center' }}>
          <Heading level={3} style={{ textAlign: 'center' }}>
            Meet the right specialist
          </Heading>
          <BodyText size={14} style={{ opacity: 0.75, textAlign: 'center' }}>
            We match your results to trusted doctors nearby, so you know exactly who to see next.
          </BodyText>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
        </View>
        <Button label="Get Started" variant="primary" block onPress={() => router.replace('/login')} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  skipRow: { height: 36, paddingHorizontal: 20, paddingTop: 8 },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 24, paddingHorizontal: 32 },
  iconCircle: {
    width: 180,
    height: 180,
    borderRadius: Radius.pill,
    backgroundColor: Colors.accent100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: { paddingHorizontal: 28, paddingBottom: 24 },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginBottom: 20 },
  dot: { width: 6, height: 6, borderRadius: Radius.pill, backgroundColor: Colors.divider },
  dotActive: { width: 20, backgroundColor: Colors.accent },
});
