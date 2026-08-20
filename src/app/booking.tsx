import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { Avatar, BodyText, Button, Card, Heading, Screen, ScreenHeader } from '@/components/medimind/ui';
import { Colors, Radius } from '@/constants/medimind-theme';
import { specialty } from '@/data/mock';

const dates = [
  { day: 'Wed', date: '20' },
  { day: 'Thu', date: '21' },
  { day: 'Fri', date: '22' },
  { day: 'Sat', date: '23' },
  { day: 'Sun', date: '24' },
];

const times = ['9:00 AM', '10:30 AM', '11:15 AM', '2:00 PM', '3:30 PM', '5:00 PM'];

export default function BookingScreen() {
  const [dateIndex, setDateIndex] = useState(1);
  const [timeIndex, setTimeIndex] = useState(1);

  return (
    <Screen>
      <ScreenHeader title="Book Appointment" onBack={() => router.back()} />

      <ScrollView contentContainerStyle={styles.content}>
        <Card elevation="sm" row style={{ gap: 12, padding: 12 }}>
          <Avatar initials="AR" size={40} fontSize={13} />
          <View>
            <BodyText size={13.5} weight="bold">
              Dr. Ananya Rao
            </BodyText>
            <BodyText size={11.5} style={{ opacity: 0.65 }}>
              {specialty}
            </BodyText>
          </View>
        </Card>

        <View>
          <Heading level={5} style={{ marginBottom: 10 }}>
            Select Date
          </Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
            {dates.map((d, i) => {
              const active = i === dateIndex;
              return (
                <Pressable
                  key={d.date}
                  onPress={() => setDateIndex(i)}
                  style={[styles.datePill, active && styles.pillActive]}>
                  <BodyText size={12} color={active ? Colors.white : Colors.text}>
                    {d.day}
                  </BodyText>
                  <BodyText size={14} weight="bold" color={active ? Colors.white : Colors.text}>
                    {d.date}
                  </BodyText>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        <View>
          <Heading level={5} style={{ marginBottom: 10 }}>
            Select Time
          </Heading>
          <View style={styles.timeGrid}>
            {times.map((t, i) => {
              const active = i === timeIndex;
              return (
                <Pressable
                  key={t}
                  onPress={() => setTimeIndex(i)}
                  style={[styles.timePill, active && styles.pillActive]}>
                  <BodyText size={12} color={active ? Colors.white : Colors.text}>
                    {t}
                  </BodyText>
                </Pressable>
              );
            })}
          </View>
        </View>

        <Card elevation="sm">
          <View style={styles.summaryRow}>
            <BodyText size={13} style={{ opacity: 0.65 }}>
              Date
            </BodyText>
            <BodyText size={13} weight="bold">
              {dates[dateIndex].day}, {dates[dateIndex].date} Aug · {times[timeIndex]}
            </BodyText>
          </View>
          <View style={styles.summaryRow}>
            <BodyText size={13} style={{ opacity: 0.65 }}>
              Consultation Fee
            </BodyText>
            <BodyText size={13} weight="bold">
              ₹800
            </BodyText>
          </View>
        </Card>
      </ScrollView>

      <View style={styles.footer}>
        <Button label="Confirm Booking" variant="primary" block onPress={() => router.push('/confirmation')} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 20, gap: 18 },
  datePill: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: Radius.md * 0.75,
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  timePill: {
    width: '31%',
    alignItems: 'center',
    paddingVertical: 9,
    borderRadius: Radius.md * 0.75,
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  pillActive: { backgroundColor: Colors.accent },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between' },
  footer: { paddingHorizontal: 20, paddingBottom: 26 },
});
