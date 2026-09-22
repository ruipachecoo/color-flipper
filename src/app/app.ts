import { Component } from '@angular/core';
import { ColorFlipper } from './components/color-flipper/color-flipper';

@Component({
  selector: 'app-root',
  imports: [ColorFlipper],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'color-flipper';
}
