import { BottomTabBarProps } from 'expo-router/js-tabs';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors, Fonts } from '@/constants/medimind-theme';
import {
  CalendarIcon,
  FileTextIcon,
  HomeIcon,
  UserIcon,
} from '@/components/medimind/icons';

const ICONS: Record<string, (props: { size: number; color: string }) => React.ReactElement> = {
  index: HomeIcon,
  reports: FileTextIcon,
  bookings: CalendarIcon,
  profile: UserIcon,
};

const LABELS: Record<string, string> = {
  index: 'Home',
  reports: 'Reports',
  bookings: 'Bookings',
  profile: 'Profile',
};

export function MediMindTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, 14) }]}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const Icon = ICONS[route.name] ?? HomeIcon;

        return (
          <Pressable
            key={route.key}
            onPress={() => {
              const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
              if (!focused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
            style={styles.item}>
            <Icon size={20} color={focused ? Colors.accent700 : Colors.text} />
            <Text
              style={[
                styles.label,
                { color: focused ? Colors.accent700 : Colors.text, opacity: focused ? 1 : 0.55 },
              ]}>
              {LABELS[route.name] ?? route.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
    backgroundColor: Colors.surface,
  },
  item: {
    alignItems: 'center',
    gap: 3,
  },
  label: {
    fontFamily: Fonts.body,
    fontSize: 10.5,
  },
});
