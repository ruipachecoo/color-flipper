import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorFlipper } from './color-flipper';

describe('ColorFlipper', () => {
  let component: ColorFlipper;
  let fixture: ComponentFixture<ColorFlipper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorFlipper],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorFlipper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
