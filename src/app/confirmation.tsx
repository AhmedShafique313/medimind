import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { CheckCircleIcon } from '@/components/medimind/icons';
import { BodyText, Button, Card, Heading, Screen } from '@/components/medimind/ui';
import { Colors, Radius } from '@/constants/medimind-theme';

export default function ConfirmationScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.iconCircle}>
          <CheckCircleIcon size={34} color={Colors.accent2_700} strokeWidth={2.75} />
        </View>
        <View style={{ alignItems: 'center', gap: 6 }}>
          <Heading level={3}>Appointment Booked!</Heading>
          <BodyText size={13.5} style={{ opacity: 0.7, textAlign: 'center' }}>
            A confirmation has been sent to your email.
          </BodyText>
        </View>

        <Card elevation="sm" style={{ width: '100%' }}>
          <View style={styles.row}>
            <BodyText size={13} style={{ opacity: 0.65 }}>
              Doctor
            </BodyText>
            <BodyText size={13} weight="bold">
              Dr. Ananya Rao
            </BodyText>
          </View>
          <View style={styles.row}>
            <BodyText size={13} style={{ opacity: 0.65 }}>
              Date &amp; Time
            </BodyText>
            <BodyText size={13} weight="bold">
              Thu, 21 Aug · 10:30 AM
            </BodyText>
          </View>
          <View style={styles.row}>
            <BodyText size={13} style={{ opacity: 0.65 }}>
              Mode
            </BodyText>
            <BodyText size={13} weight="bold">
              Video Call
            </BodyText>
          </View>
        </Card>
      </ScrollView>

      <View style={styles.footer}>
        <Button label="Add to Calendar" variant="secondary" block />
        <Button label="View My Bookings" variant="primary" block onPress={() => router.replace('/(tabs)/bookings')} />
        <Button label="Back to Home" variant="ghost" onPress={() => router.replace('/(tabs)')} style={{ alignSelf: 'center' }} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 26,
    paddingTop: 44,
    gap: 18,
  },
  iconCircle: {
    width: 76,
    height: 76,
    borderRadius: Radius.pill,
    backgroundColor: Colors.accent2_100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  footer: { paddingHorizontal: 26, paddingBottom: 26, gap: 8 },
});
