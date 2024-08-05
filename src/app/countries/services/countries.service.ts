import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
	private apiURL: string = 'https://restcountries.com/v3.1';

	constructor(private http: HttpClient) {}

	searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
		const query = `${this.apiURL}/alpha/${alphaCode}`;
		return this.http.get<Country[]>(query).pipe(
			map((countries) => (countries.length > 0 ? countries[0] : null)),
			catchError((error) => {
				console.error(error);
				return of(null);
			})
		);
	}

	searchCapital(term: string): Observable<Country[]> {
		const query = `${this.apiURL}/capital/${term}`;
		return this.http.get<Country[]>(query).pipe(
			catchError((error) => {
				console.error(error);
				return of([]);
			})
		);
	}

	searchCountry(term: string): Observable<Country[]> {
		const query = `${this.apiURL}/name/${term}`;
		return this.http.get<Country[]>(query).pipe(
			catchError((error) => {
				console.error(error);
				return of([]);
			})
		);
	}

	searchRegion(region: string): Observable<Country[]> {
		const query = `${this.apiURL}/region/${region}`;
		return this.http.get<Country[]>(query).pipe(
			catchError((error) => {
				console.error(error);
				return of([]);
			})
		);
	}
}
