export interface EmotionResult {
  id: string;
  textSnippet: string;
  timestamp: string;
  dominantEmotion: string;
  score: number;
}
export const EMOTION_COLOURS: Record<string, string> = {
  Joy: '#F59E0B', Anger: '#EF4444', Sadness: '#3B82F6',
  Fear: '#8B5CF6', Surprise: '#EC4899', Disgust: '#10B981', Neutral: '#6B7280',
};

export const EMOTION_ICONS: Record<string, string> = {
  Joy: '😊', Anger: '😠', Sadness: '😢',
  Fear: '😰', Surprise: '😲', Disgust: '🤢', Neutral: '😐',
};