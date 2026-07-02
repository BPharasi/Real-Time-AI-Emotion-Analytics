import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalyticsService } from '../../core/services/analytics.service';
import { EmotionResult, EMOTION_COLOURS, EMOTION_ICONS } from '../../models/emotion-result.model';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-2xl mx-auto p-6">
      <h2 class="text-2xl font-bold mb-4">Emotion Analyser</h2>
      <textarea [(ngModel)]="inputText" rows="5"
        placeholder="Enter text to analyse..."
        class="w-full p-3 border border-gray-200 rounded-lg resize-none
               focus:outline-none focus:ring-2 focus:ring-ocean-accent bg-panel-white"
        [disabled]="isLoading()"></textarea>
      <p class="text-right text-xs text-gray-400 mt-1">{{ inputText.length }} / 5000</p>
      <button (click)="analyse()" [disabled]="isLoading() || !inputText.trim()"
        class="mt-3 w-full py-3 bg-ocean-accent text-white font-semibold rounded-lg
               hover:bg-sky-600 disabled:opacity-50 transition-colors">
        {{ isLoading() ? 'Analysing...' : 'Analyse Emotion' }}
      </button>
      @if (result()) {
        <div class="mt-6 p-4 bg-panel-white rounded-lg border-l-4"
             [style.border-color]="getColour(result()!.dominantEmotion)">
          <p class="text-lg font-bold">{{ icons[result()!.dominantEmotion] }} {{ result()!.dominantEmotion }}</p>
          <p class="text-gray-500">Confidence: {{ result()!.score.toFixed(1) }}%</p>
        </div>
      }
      @if (error()) {
        <div class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600">⚠️ {{ error() }}</div>
      }
    </div>
  `
})
export class TextInputComponent {
  inputText = '';
  isLoading = signal(false);
  result    = signal<EmotionResult | null>(null);
  error     = signal<string | null>(null);
  readonly icons = EMOTION_ICONS;
  private readonly svc = inject(AnalyticsService);
  getColour(e: string) { return EMOTION_COLOURS[e] ?? '#6B7280'; }
  analyse(): void {
    this.isLoading.set(true); this.error.set(null);
    this.svc.analyzeText(this.inputText).subscribe({
      next:  res => { this.result.set(res);       this.isLoading.set(false); },
      error: err => { this.error.set(err.message); this.isLoading.set(false); }
    });
  }
}