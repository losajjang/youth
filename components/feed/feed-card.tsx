import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ContentItem } from '@/types/content';

type FeedCardProps = {
  item: ContentItem;
};

export function FeedCard({ item }: FeedCardProps) {
  const isVideo = item.type === 'video';

  return (
    <View style={styles.card}>
      <View style={styles.thumbnail}>
        <MaterialIcons
          color="#FFFFFF"
          name={isVideo ? 'play-circle-filled' : 'article'}
          size={28}
        />
        <Text style={styles.thumbnailLabel}>{isVideo ? 'VIDEO' : 'ARTICLE'}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.metaRow}>
          <Text style={styles.source}>{item.source}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.footer}>
          <Text style={styles.tag}>{item.eraLabel}</Text>
          <Pressable style={styles.saveButton}>
            <MaterialIcons
              color={item.isSaved ? '#8A5C3D' : '#7B848D'}
              name={item.isSaved ? 'bookmark' : 'bookmark-border'}
              size={18}
            />
            <Text style={styles.saveText}>{item.isSaved ? '저장됨' : '저장'}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E6E8EA',
    borderRadius: 22,
    borderWidth: 1,
    overflow: 'hidden',
  },
  thumbnail: {
    alignItems: 'center',
    backgroundColor: '#D78E52',
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  thumbnailLabel: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  body: {
    gap: 12,
    padding: 18,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  source: {
    color: '#8A5C3D',
    fontSize: 13,
    fontWeight: '700',
  },
  year: {
    color: '#7B848D',
    fontSize: 13,
    fontWeight: '600',
  },
  title: {
    color: '#181A1B',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
  },
  description: {
    color: '#636A70',
    fontSize: 15,
    lineHeight: 22,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tag: {
    color: '#4B5560',
    fontSize: 13,
    fontWeight: '600',
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 999,
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  saveText: {
    color: '#4B5560',
    fontSize: 13,
    fontWeight: '600',
  },
});
