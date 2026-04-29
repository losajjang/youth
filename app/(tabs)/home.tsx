import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { FeedList } from '@/components/feed/feed-list';
import { contentItems } from '@/data/content-items';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>홈 피드</Text>
        <Text style={styles.subtitle}>청춘 시절 기사와 영상을 한 번에 둘러보는 더미 피드입니다.</Text>
      </View>
      <FeedList items={contentItems} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F2',
  },
  header: {
    gap: 6,
    paddingHorizontal: 20,
    paddingBottom: 12,
    paddingTop: 20,
  },
  title: {
    color: '#181A1B',
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#636A70',
    fontSize: 15,
    lineHeight: 22,
  },
});
