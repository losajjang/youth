export type ContentType = 'article' | 'video';

export type ContentItem = {
  id: string;
  title: string;
  description: string;
  source: string;
  year: number;
  type: ContentType;
  eraLabel: string;
  isSaved: boolean;
};
