import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { UploadIcon } from '@/components/medimind/icons';
import { BodyText, Button, Heading, Screen } from '@/components/medimind/ui';
import { Colors, Radius } from '@/constants/medimind-theme';

export default function OnboardingUploadScreen() {
  return (
    <Screen>
      <View style={styles.skipRow}>
        <Pressable onPress={() => router.replace('/login')} hitSlop={8}>
          <BodyText color={Colors.accent} size={13}>
            Skip
          </BodyText>
        </Pressable>
      </View>

      <View style={styles.body}>
        <View style={styles.iconCircle}>
          <UploadIcon size={72} color={Colors.accent2_700} strokeWidth={2.75} />
        </View>
        <View style={{ gap: 10, alignItems: 'center' }}>
          <Heading level={3} style={{ textAlign: 'center' }}>
            Upload your lab report
          </Heading>
          <BodyText size={14} style={{ opacity: 0.75, textAlign: 'center' }}>
            Snap a photo or upload any PDF report — we&apos;ll read it for you in seconds.
          </BodyText>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.dots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
        </View>
        <Button label="Next" variant="primary" block onPress={() => router.push('/onboarding-match')} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  skipRow: { alignItems: 'flex-end', paddingHorizontal: 20, paddingTop: 8 },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 24, paddingHorizontal: 32 },
  iconCircle: {
    width: 180,
    height: 180,
    borderRadius: Radius.pill,
    backgroundColor: Colors.accent2_100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: { paddingHorizontal: 28, paddingBottom: 24 },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6, marginBottom: 20 },
  dot: { width: 6, height: 6, borderRadius: Radius.pill, backgroundColor: Colors.divider },
  dotActive: { width: 20, backgroundColor: Colors.accent },
});
