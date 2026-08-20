import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { PhoneIcon, StarIcon, VideoCallIcon } from '@/components/medimind/icons';
import { Avatar, BodyText, Button, Card, Heading, Screen, ScreenHeader, Tag } from '@/components/medimind/ui';
import { Colors } from '@/constants/medimind-theme';
import { getDoctorById } from '@/data/mock';

export default function DoctorProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const doctor = getDoctorById(id ?? '1');

  return (
    <Screen>
      <ScreenHeader onBack={() => router.back()} />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={{ alignItems: 'center', gap: 8 }}>
          <Avatar initials={doctor.initials} size={84} fontSize={26} />
          <Heading level={4} style={{ marginTop: 6 }}>
            {doctor.name}
          </Heading>
          <BodyText size={13} style={{ opacity: 0.65 }}>
            {doctor.specialty} · {doctor.exp} experience
          </BodyText>
          <View style={styles.ratingRow}>
            <StarIcon size={14} color={Colors.accent} />
            <BodyText size={13} weight="bold">
              {doctor.rating}
            </BodyText>
            <BodyText size={12} style={{ opacity: 0.55 }}>
              ({doctor.reviews} reviews)
            </BodyText>
          </View>
        </View>

        <View style={styles.statsRow}>
          <Card elevation="sm" style={styles.statCard}>
            <BodyText size={15} weight="bold" style={{ textAlign: 'center' }}>
              {doctor.exp}
            </BodyText>
            <BodyText size={10.5} style={{ opacity: 0.6, textAlign: 'center' }}>
              Experience
            </BodyText>
          </Card>
          <Card elevation="sm" style={styles.statCard}>
            <BodyText size={15} weight="bold" style={{ textAlign: 'center' }}>
              {doctor.fee}
            </BodyText>
            <BodyText size={10.5} style={{ opacity: 0.6, textAlign: 'center' }}>
              Fee
            </BodyText>
          </Card>
          <Card elevation="sm" style={styles.statCard}>
            <BodyText size={15} weight="bold" style={{ textAlign: 'center' }}>
              2.4k
            </BodyText>
            <BodyText size={10.5} style={{ opacity: 0.6, textAlign: 'center' }}>
              Patients
            </BodyText>
          </Card>
        </View>

        <View>
          <Heading level={5} style={{ marginBottom: 6 }}>
            About
          </Heading>
          <BodyText size={13} style={{ opacity: 0.75 }}>
            {doctor.name} specializes in hormonal and metabolic disorders, including thyroid,
            diabetes and vitamin deficiencies, with a patient-first approach.
          </BodyText>
        </View>

        <View>
          <Heading level={5} style={{ marginBottom: 6 }}>
            Qualifications
          </Heading>
          <View style={styles.tagWrap}>
            <Tag variant="neutral">MBBS</Tag>
            <Tag variant="neutral">MD Endocrinology</Tag>
            <Tag variant="neutral">Fellowship, Diabetology</Tag>
          </View>
        </View>

        <View>
          <Heading level={5} style={{ marginBottom: 6 }}>
            Availability
          </Heading>
          <View style={styles.tagWrap}>
            <Tag variant="accent2">Mon</Tag>
            <Tag variant="accent2">Tue</Tag>
            <Tag variant="accent2">Wed</Tag>
            <Tag variant="outline">Thu</Tag>
            <Tag variant="accent2">Fri</Tag>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button variant="icon" icon={<PhoneIcon size={17} color={Colors.text} strokeWidth={2.75} />} />
        <Button variant="icon" icon={<VideoCallIcon size={17} color={Colors.text} strokeWidth={2.75} />} />
        <Button label="Book Appointment" variant="primary" onPress={() => router.push('/booking')} style={{ flex: 1 }} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 24, paddingBottom: 20, gap: 16 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  statsRow: { flexDirection: 'row', gap: 8 },
  statCard: { flex: 1, alignItems: 'center', paddingVertical: 12, paddingHorizontal: 8 },
  tagWrap: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
  footer: { flexDirection: 'row', gap: 10, paddingHorizontal: 24, paddingBottom: 26 },
});
