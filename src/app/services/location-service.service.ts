import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {
  private countriesApiUrl = 'https://restcountries.com/v3.1/all';
  
  // Using a different API for states and cities that has better coverage
  private statesApiUrl = 'https://api.countrystatecity.in/v1/countries';
  
  private apiKey = 'ZmR2c3N5UjlnN0RJSEMwOTJXUnMxQ0hSY2EzUFdVOW5XZGhBZmxhaw=='; // Get from https://countrystatecity.in/

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.countriesApiUrl).pipe(
      map((countries: any[]) => countries
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .map(country => ({
          name: country.name.common,
          code: country.cca2
        }))
      )
    );
  }

  getStates(countryCode: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.statesApiUrl}/${countryCode}/states`, {
      headers: {
        'X-CSCAPI-KEY': this.apiKey
      }
    }).pipe(
      map(states => states.map(state => ({
        name: state.name,
        code: state.iso2
      })))
    );
  }

  getDistricts(countryCode: string, stateCode: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.statesApiUrl}/${countryCode}/states/${stateCode}/cities`,
      {
        headers: {
          'X-CSCAPI-KEY': this.apiKey
        }
      }
    ).pipe(
      map(cities => cities.map(city => ({
        name: city.name
      })))
    );
  }
}
