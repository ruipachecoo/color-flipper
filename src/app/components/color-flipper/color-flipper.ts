import { Component, computed, inject, signal } from '@angular/core';
import { Color } from '../../services/color';

@Component({
  selector: 'app-color-flipper',
  imports: [],
  templateUrl: './color-flipper.html',
  styleUrl: './color-flipper.css'
})
export class ColorFlipper {
  private readonly colorService = inject(Color);

  protected readonly currentColor = signal(this.colorService.generateRandom());

  protected readonly isLightColor = computed(() => {
    const hex = this.currentColor().replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5;
  });

  protected readonly textColorClass = computed(() =>
    this.isLightColor() ? 'text-slate-900' : 'text-white'
  );

  protected generateNewColor(): void {
    this.currentColor.set(this.colorService.generateRandom());
  }
}
