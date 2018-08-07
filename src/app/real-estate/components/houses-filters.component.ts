import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { City, HouseFilters } from '../models';

/* TODO(5pts): create form controls */
/* TODO(5pts): render form */

@Component({
  selector: 'app-houses-filters',
  templateUrl: 'houses-filters.component.html',
  styles: [
    `
      :host {
        width: 40rem;
        margin-bottom: 1rem;
      }
      .filter-form {
        width: 100%;
      }

      mat-form-field {
        width: 100%;
      }

      mat-radio-group {
        display: flex;
        flex-flow: column;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    `
  ]
})
export class HousesFiltersComponent {
  @Output() filtersChange = new EventEmitter<HouseFilters>();

  @Input()
  set filters(v: HouseFilters) {
    this.form.patchValue(v || {});
  }
  @Input() cities: City[];

  public form: FormGroup = new FormGroup({
    'cityId': new FormControl(),
    'priceLessThan': new FormControl(null, Validators.min(0)),
    'onSale': new FormControl()
  });

  onSubmit() {
    if (this.form.valid) {
      this.filtersChange.emit(this.form.value);
    }
  }
}
