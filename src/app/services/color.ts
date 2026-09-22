import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Color {
  private readonly hexChars = '0123456789ABCDEF';

  generateRandom(): string {
    let color = '#';

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * this.hexChars.length);
      color += this.hexChars[randomIndex];
    }

    return color;
  }
}
