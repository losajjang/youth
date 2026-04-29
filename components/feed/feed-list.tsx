import { FlatList, StyleSheet, Text, View } from 'react-native';

import { ContentItem } from '@/types/content';

import { FeedCard } from './feed-card';

type FeedListProps = {
  items: ContentItem[];
  emptyTitle?: string;
  emptyDescription?: string;
};

export function FeedList({
  items,
  emptyTitle = '표시할 콘텐츠가 없습니다',
  emptyDescription = '더미데이터가 연결되면 이 영역에 카드가 표시됩니다.',
}: FeedListProps) {
  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FeedCard item={item} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>{emptyTitle}</Text>
          <Text style={styles.emptyDescription}>{emptyDescription}</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 14,
    paddingBottom: 32,
    paddingHorizontal: 20,
  },
  emptyState: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#E6E8EA',
    borderRadius: 20,
    borderWidth: 1,
    gap: 8,
    marginTop: 12,
    padding: 24,
  },
  emptyTitle: {
    color: '#181A1B',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  emptyDescription: {
    color: '#636A70',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
});
