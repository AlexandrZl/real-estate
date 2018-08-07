import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatButtonModule
} from '@angular/material';

import { HouseCardComponent } from './components/house-card.component';
import { HousesFiltersComponent } from './components/houses-filters.component';
import { HousesListComponent } from './components/houses-list.component';
import { HouseDetailsComponent } from './containers/house-details.component';
import { HouseListingsComponent } from './containers/house-listings.component';

const MAT_COMPONENTS = [
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule,
  MatButtonModule
];

const HOUSE_COMPONENTS = [
  HousesListComponent,
  HouseDetailsComponent,
  HousesFiltersComponent,
  HouseListingsComponent,
  HouseCardComponent
];

@NgModule({
  imports: [
    MAT_COMPONENTS,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: HouseListingsComponent },
      { path: ':id', component: HouseDetailsComponent }
    ])
  ],
  declarations: [
    HOUSE_COMPONENTS
  ]
})
export class RealEstateModule {}
