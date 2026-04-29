import { ContentItem } from '@/types/content';

export const contentItems: ContentItem[] = [
  {
    id: 'content-1',
    title: '2002년 거리 응원의 열기를 다시 보여준 다큐 클립',
    description: '당시 광장 분위기와 인터뷰를 짧게 묶은 영상형 더미 콘텐츠입니다.',
    source: 'YouTube Archive',
    year: 2002,
    type: 'video',
    eraLabel: '고등학교 시절',
    isSaved: true,
  },
  {
    id: 'content-2',
    title: 'PC방과 미니홈피 문화가 바꾼 일상에 대한 회고 기사',
    description: '2000년대 초반 온라인 문화의 감성을 짧게 정리한 기사형 더미 콘텐츠입니다.',
    source: 'Nostalgia Magazine',
    year: 2004,
    type: 'article',
    eraLabel: '대학 초년',
    isSaved: false,
  },
  {
    id: 'content-3',
    title: '주말 음악방송 무대를 모아본 추억 플레이리스트',
    description: '당시 자주 듣던 분위기를 피드 카드에 올려보는 영상형 더미 콘텐츠입니다.',
    source: 'Retro Playlist',
    year: 2001,
    type: 'video',
    eraLabel: '중학생 시절',
    isSaved: true,
  },
];
