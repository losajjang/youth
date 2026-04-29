import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>마이페이지</Text>
        <Text style={styles.description}>
          선택한 청춘 시절, 저장 개수, 앱 설정을 모아보는 공간입니다.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>선택된 시절</Text>
          <Text style={styles.cardValue}>1998 - 2005</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>저장한 콘텐츠</Text>
          <Text style={styles.cardValue}>2개</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>앱 상태</Text>
          <Text style={styles.cardValue}>더미데이터 기반 MVP</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F2',
  },
  container: {
    gap: 14,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    color: '#181A1B',
    fontSize: 28,
    fontWeight: '700',
  },
  description: {
    color: '#636A70',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E6E8EA',
    borderRadius: 18,
    borderWidth: 1,
    gap: 6,
    padding: 18,
  },
  cardLabel: {
    color: '#636A70',
    fontSize: 13,
    fontWeight: '600',
  },
  cardValue: {
    color: '#181A1B',
    fontSize: 20,
    fontWeight: '700',
  },
});
