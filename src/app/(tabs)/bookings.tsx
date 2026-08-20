import { router } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { BellIcon, CalendarIcon, ClockIcon } from '@/components/medimind/icons';
import { BodyText, Button, Card, NavTop, Screen, Tag } from '@/components/medimind/ui';
import { Colors } from '@/constants/medimind-theme';
import { appointments } from '@/data/mock';

export default function BookingsScreen() {
  return (
    <Screen edges={['top']}>
      <NavTop
        title="My Bookings"
        right={
          <Button
            variant="icon"
            onPress={() => router.push('/notifications')}
            icon={<BellIcon size={18} color={Colors.text} strokeWidth={2.75} />}
          />
        }
      />

      <ScrollView contentContainerStyle={styles.list}>
        {appointments.map((a) => (
          <Card key={a.id} elevation="sm" style={{ gap: 10 }}>
            <View style={styles.headerRow}>
              <View>
                <BodyText size={14} weight="bold">
                  {a.doctor}
                </BodyText>
                <BodyText size={12} style={{ opacity: 0.65 }}>
                  {a.specialty}
                </BodyText>
              </View>
              <Tag variant="accent2">{a.status}</Tag>
            </View>
            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <CalendarIcon size={13} color={Colors.text} strokeWidth={2.75} />
                <BodyText size={12} style={{ opacity: 0.75 }}>
                  {a.date}
                </BodyText>
              </View>
              <View style={styles.metaItem}>
                <ClockIcon size={13} color={Colors.text} strokeWidth={2.75} />
                <BodyText size={12} style={{ opacity: 0.75 }}>
                  {a.time}
                </BodyText>
              </View>
            </View>
            <View style={styles.actionsRow}>
              <Button label="Reschedule" variant="secondary" style={{ flex: 1 }} />
              <Button
                label="Message"
                variant="primary"
                style={{ flex: 1 }}
                onPress={() => router.push('/chat')}
              />
            </View>
          </Card>
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 20, gap: 12 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  metaRow: { flexDirection: 'row', gap: 14 },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  actionsRow: { flexDirection: 'row', gap: 8, marginTop: 2 },
});
