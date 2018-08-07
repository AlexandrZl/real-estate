import { Component, Input } from '@angular/core';
import { House } from '../models';

/* TODO(5pts): render houses list */
@Component({
  selector: 'app-houses-list',
  templateUrl: 'houses-list.component.html',
  styles: [`
    table {
      width: 40rem;
    }
  `]
})
export class HousesListComponent {
  @Input() houses: House[];

  public displayedColumns: string[] = ['id', 'title', 'price', 'onSale'];
}
