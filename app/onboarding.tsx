import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { onboardingOptions } from '@/data/onboarding-options';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>Youth Archive</Text>
          <Text style={styles.title}>청춘 시절을 골라 피드를 시작해보세요</Text>
          <Text style={styles.description}>
            먼저 시절을 하나 선택하면 기사와 영상이 섞인 더미 피드를 바로 확인할 수 있습니다.
          </Text>
        </View>

        <View style={styles.optionList}>
          {onboardingOptions.map((option) => (
            <Pressable
              key={option.id}
              onPress={() => router.replace('/(tabs)/home')}
              style={({ pressed }) => [styles.optionCard, pressed && styles.optionCardPressed]}>
              <Text style={styles.optionTitle}>{option.label}</Text>
              <Text style={styles.optionYears}>
                {option.startYear} - {option.endYear}
              </Text>
              <Text style={styles.optionDescription}>{option.description}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F3EC',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 24,
  },
  hero: {
    gap: 12,
    paddingTop: 24,
  },
  eyebrow: {
    color: '#8A5C3D',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    color: '#1F1C18',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 38,
  },
  description: {
    color: '#62584D',
    fontSize: 16,
    lineHeight: 24,
  },
  optionList: {
    gap: 12,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E7DED0',
    borderRadius: 20,
    borderWidth: 1,
    gap: 6,
    padding: 18,
  },
  optionCardPressed: {
    opacity: 0.85,
  },
  optionTitle: {
    color: '#1F1C18',
    fontSize: 18,
    fontWeight: '700',
  },
  optionYears: {
    color: '#8A5C3D',
    fontSize: 14,
    fontWeight: '600',
  },
  optionDescription: {
    color: '#62584D',
    fontSize: 14,
    lineHeight: 20,
  },
});
