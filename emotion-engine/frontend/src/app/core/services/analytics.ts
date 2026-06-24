import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { EmotionResult } from '../../models/emotion-result.model';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  analyzeText(text: string): Observable<EmotionResult> {
    const mockData: EmotionResult = {
      id: crypto.randomUUID(),
      textSnippet: text,
      timestamp: new Date().toISOString(),
      dominantEmotion: 'Joy',
      score: 85.5
    };
    return of(mockData).pipe(delay(1500)); 
  }
}
