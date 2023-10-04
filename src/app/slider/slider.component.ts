import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  sliderValue = 50; // Initial value for the slider

  onSliderChange(event: any) {
    // Handle slider value changes here
    console.log('Slider value:', event.value);
  }
}

