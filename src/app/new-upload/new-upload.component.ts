import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationServiceService } from '../services/location-service.service';

interface Country {
  name: string;
  code: string;
}

interface State {
  name: string;
  code: string;
}

interface District {
  name: string;
}

@Component({
  selector: 'app-new-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-upload.component.html',
  styleUrl: './new-upload.component.css'
})
export class NewUploadComponent {
  countries: Country[] = [];
  states: State[] = [];
  districts: District[] = [];

  selectedCountry: string = '';
  selectedState: string = '';
  selectedDistrict: string = '';

  constructor(private locationService: LocationServiceService) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.locationService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
      },
      error: (error) => {
        console.error('Error loading countries:', error);
      }
    });
  }

  onCountryChange(): void {
    this.states = [];
    this.districts = [];
    this.selectedState = '';
    this.selectedDistrict = '';

    if (this.selectedCountry) {
      this.locationService.getStates(this.selectedCountry).subscribe({
        next: (data) => {
          this.states = data;
        },
        error: (error) => {
          console.error('Error loading states:', error);
        }
      });
    }
  }

  onStateChange(): void {
    this.districts = [];
    this.selectedDistrict = '';

    if (this.selectedCountry && this.selectedState) {
      this.locationService.getDistricts(this.selectedCountry, this.selectedState).subscribe({
        next: (data) => {
          this.districts = data;
        },
        error: (error) => {
          console.error('Error loading districts:', error);
        }
      });
    }
  }
}
