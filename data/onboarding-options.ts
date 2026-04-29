import { OnboardingOption } from '@/types/onboarding';

export const onboardingOptions: OnboardingOption[] = [
  {
    id: 'late-90s',
    label: '1990년대 후반',
    startYear: 1997,
    endYear: 2001,
    description: 'PC통신, 첫 인터넷 문화, 음악방송 감성을 중심으로 피드를 시작합니다.',
  },
  {
    id: 'early-2000s',
    label: '2000년대 초반',
    startYear: 2002,
    endYear: 2006,
    description: '월드컵, 미니홈피, 예능과 드라마 전성기 분위기를 기준으로 구성합니다.',
  },
  {
    id: 'late-2000s',
    label: '2000년대 후반',
    startYear: 2007,
    endYear: 2011,
    description: 'UCC, 초기 스마트폰, 온라인 커뮤니티 감성을 엮어보는 시절입니다.',
  },
];
