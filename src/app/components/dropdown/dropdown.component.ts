// Import angular modules.
import {
  Component,
  OnInit
} from '@angular/core';

// Import other modules.
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country';
import { State } from '../../models/state';
import { City } from '../../models/city';
import {
  ISociety,
  Society
} from 'src/app/models/society';
import { SocietyService } from 'src/app/services/society.service';

/**
 * Component
 */
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  // Class member public variables.
  selectedCountry = 0;
  selectedState = 0;
  countries: Country[];
  societies: ISociety[];
  states: State[];
  cities: City[];
  numbers = [1, 2, 3 ];

  // Class member private variables.

  // Dependency Injection.
  constructor(
    private _countryService: CountryService,
    private _societyService: SocietyService
  ) { }

  /**
   *
   * @param {number} country_id - Country Id.
   */
  onSelectCountry(country_id: number) {
    this.selectedState = 0;
    this.cities = [];
    this.selectedCountry = country_id;
    this.states = this._countryService.getStates().filter((item) => item.countryId === Number(country_id));
  }

  onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.cities = this._countryService.getCity().filter((item) => item.stateId === Number(state_id));
  }

  ngOnInit() {
    // Fetch data.
    this.countries = this._countryService.getCountries();
    // fetch data array of object from url
    this._societyService.getSociety().subscribe((data: any) => this.societies = data.dbResponse.rows);
  }

  // fetchData() {
  //   this._countryService.getSociety().subscribe((data: Country[]) => {
  //     this.countries = data;
  //     console.log('Data requested ...');
  //     console.log(this.countries);
  //   });
  // }

}
