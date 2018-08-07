import { Component, Input } from '@angular/core';
import { House } from '../models';

// TODO(5pts): render house

@Component({
  selector: 'app-house-card',
  templateUrl: 'house-card.component.html',
  styles: [`
    :host {
      display: flex;
      justify-content: center;
    }
    .house-card {
      display: flex;
      width: 20rem;
      flex-direction: column;
    }
  `]
})
export class HouseCardComponent {
  @Input() house: House;
}
