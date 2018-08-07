import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators';

import { CitiesService } from '../apis/cities.service';
import { HousesService } from '../apis/houses.service';
import { City, House, HouseFilters } from '../models';

@Component({
  selector: 'app-house-listings',
  template: `
    <app-houses-filters
      [cities]="cities$ | async"
      [filters]="filters$ | async"
      (filtersChange)="onFiltersChange($event)">
    </app-houses-filters>

    <app-houses-list
      [houses]="houses$ | async">
    </app-houses-list>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        flex-flow: column;
        margin-top: 1rem;
      }
    `
  ]
})
export class HouseListingsComponent implements OnInit {
  public cities$: Observable<City[]>;
  public filters$: Observable<HouseFilters>;
  public houses$: Observable<House[]>;

  constructor(
    private citiesAPI: CitiesService,
    private houseAPI: HousesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.initCities();
    this.initFilters();
    this.initHouses();

    /*
    1.TODO(1pts)
      Goal: fetch all cities
      Implementation: set this.cities$

    2. TODO(5pts)
      Goal: parse query params stream into filters object
      Implementation: set this.filters$
      Hint:
        query params: real-estate?cityId=3&onSale=false&priceLessThan=244
        parsed value: { cityId: 3, onSale: false, priceLessThan: 244 }

    3. TODO(8pts)
      Goal: fetch all houses matching current filters
      Implementation: set this.houses$
      Hint: this example includes using higher order observables.
            we must switch from the filters$ stream into the houses$ stream.

    */
  }

  public onFiltersChange(queryParams: HouseFilters): void {
    this.router.navigate(['/real-estate'], { queryParams });
    /* TODO(1pts)
      Goal: update URL query params with the new filters
    */
  }

  private initCities(): void {
    this.cities$ = this.citiesAPI.getCities().pipe(
      switchMap((cities: City[]) => {
        return of(cities);
      })
    );
  }

  private initHouses(): void {
    this.houses$ = this.filters$.pipe(
      switchMap(filters => {
        return this.houseAPI.getHouses(filters);
      })
    );
  }

  private initFilters(): void {
    this.filters$ = this.activatedRoute.queryParams.pipe(
      switchMap(params => {
        const filters: HouseFilters = {};

        if (typeof params.cityId !== 'undefined') {
          filters.cityId = +params.cityId;
        }

        if (typeof params.priceLessThan !== 'undefined') {
          filters.priceLessThan = +params.priceLessThan;
        }

        if (typeof params.onSale !== 'undefined') {
          filters.onSale = params.onSale === 'true';
        }

        return of(filters);
      })
    );
  }

}
