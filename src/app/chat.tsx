import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ChevronLeftIcon, SendIcon, VideoCallIcon } from '@/components/medimind/icons';
import { Avatar, BodyText, Button, Field, Screen } from '@/components/medimind/ui';
import { Colors, Radius } from '@/constants/medimind-theme';
import { chatMessages } from '@/data/mock';

export default function ChatScreen() {
  const [draft, setDraft] = useState('');

  return (
    <Screen>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn} hitSlop={8}>
          <ChevronLeftIcon size={16} color={Colors.text} strokeWidth={2.75} />
        </Pressable>
        <Avatar initials="AR" size={34} fontSize={12} />
        <View style={{ flex: 1 }}>
          <BodyText size={13.5} weight="bold">
            Dr. Ananya Rao
          </BodyText>
          <BodyText size={11} color={Colors.accent2_700}>
            Online
          </BodyText>
        </View>
        <Button variant="icon" icon={<VideoCallIcon size={16} color={Colors.text} strokeWidth={2.75} />} />
      </View>

      <ScrollView contentContainerStyle={styles.messages}>
        {chatMessages.map((m) => (
          <View key={m.id} style={{ alignItems: m.isDoctor ? 'flex-start' : 'flex-end', gap: 3 }}>
            <View style={[styles.bubble, m.isDoctor ? styles.bubbleDoc : styles.bubbleMe]}>
              <BodyText size={13.5} color={m.isDoctor ? Colors.text : Colors.white}>
                {m.text}
              </BodyText>
            </View>
            <BodyText size={10} style={{ opacity: 0.5, marginHorizontal: 4 }}>
              {m.time}
            </BodyText>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputRow}>
        <Field
          placeholder="Type a message…"
          value={draft}
          onChangeText={setDraft}
          style={{ flex: 1 }}
        />
        <Pressable style={styles.sendBtn} onPress={() => setDraft('')}>
          <SendIcon size={16} color={Colors.white} strokeWidth={2.75} />
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 8,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: Radius.pill,
    borderWidth: 1,
    borderColor: Colors.divider,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messages: { paddingHorizontal: 18, paddingVertical: 14, gap: 10 },
  bubble: { paddingVertical: 10, paddingHorizontal: 14, maxWidth: '78%' },
  bubbleDoc: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
  },
  bubbleMe: {
    backgroundColor: Colors.accent,
    borderRadius: 16,
    borderBottomRightRadius: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
  },
  sendBtn: {
    width: 38,
    height: 38,
    borderRadius: Radius.pill,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
