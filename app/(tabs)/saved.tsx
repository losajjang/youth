import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { FeedList } from '@/components/feed/feed-list';
import { contentItems } from '@/data/content-items';

const savedItems = contentItems.filter((item) => item.isSaved);

export default function SavedScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>저장</Text>
        <Text style={styles.subtitle}>나중에 다시 보고 싶은 콘텐츠를 모아보는 영역입니다.</Text>
      </View>
      <FeedList
        items={savedItems}
        emptyTitle="아직 저장한 콘텐츠가 없습니다"
        emptyDescription="홈 피드에서 저장 버튼을 연결하면 이 화면에 카드가 쌓이게 됩니다."
      />
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
