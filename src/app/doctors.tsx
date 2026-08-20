import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ChevronRightIcon, StarIcon } from '@/components/medimind/icons';
import { Avatar, BodyText, Card, Screen, ScreenHeader, Tag } from '@/components/medimind/ui';
import { Colors } from '@/constants/medimind-theme';
import { doctors, specialty } from '@/data/mock';

export default function DoctorsScreen() {
  return (
    <Screen>
      <ScreenHeader title="Specialists Near You" onBack={() => router.back()} />

      <View style={styles.filters}>
        <Tag variant="accent">{specialty}</Tag>
        <Tag variant="outline">Available Today</Tag>
        <Tag variant="outline">Top Rated</Tag>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {doctors.map((d) => (
          <Pressable key={d.id} onPress={() => router.push(`/doctor/${d.id}`)}>
            <Card elevation="sm" row style={{ gap: 12, padding: 12 }}>
              <Avatar initials={d.initials} size={44} fontSize={14} />
              <View style={{ flex: 1 }}>
                <BodyText size={13.5} weight="bold">
                  {d.name}
                </BodyText>
                <BodyText size={11.5} style={{ opacity: 0.65 }}>
                  {d.specialty} · {d.exp}
                </BodyText>
                <View style={styles.ratingRow}>
                  <StarIcon size={12} color={Colors.accent} />
                  <BodyText size={11.5} weight="bold">
                    {d.rating}
                  </BodyText>
                  <BodyText size={11} style={{ opacity: 0.55 }}>
                    ({d.reviews}) · {d.fee}
                  </BodyText>
                </View>
              </View>
              <ChevronRightIcon size={16} color={Colors.text} strokeWidth={2.75} />
            </Card>
          </Pressable>
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  filters: { flexDirection: 'row', gap: 8, paddingHorizontal: 20, paddingVertical: 12 },
  list: { paddingHorizontal: 20, paddingBottom: 20, gap: 10 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 3 },
});
