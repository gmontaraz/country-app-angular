import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: false,

  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries: Country[] = []
  constructor(private countriesService: CountriesService) {}

  searchByCountry(term: string) {
    this.countriesService.searchCountry(term).subscribe(countries => {
      this.countries = countries
    })
  }
}
