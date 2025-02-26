import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import "zurich-cl-sdk/dist/slider";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-example-sdk-cl';

  onChangeSlider(evt: Event) {
    if (evt.target) {
      console.log(evt, (evt.target as HTMLInputElement).value, (evt as CustomEvent).detail.value);
    }
  }
}
