import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
	private apiURL: string = 'https://restcountries.com/v3.1';
	public cacheStore: CacheStore = {
		byCapital: {
			term: '',
			countries: []
		},
		byCountry: {
			term: '',
			countries: []
		},
		byRegion: {
			region: '',
			countries: []
		}
	};

	constructor(private http: HttpClient) {
		this.loadFromLocalStorage();
	}

	private saveToLocalStorage() {
		localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
	}

	private loadFromLocalStorage() {
		if (!localStorage.getItem('cacheStore')) return;

		this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
	}

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

	private getCountriesRequest(url: string): Observable<Country[]> {
		return this.http.get<Country[]>(url).pipe(
			catchError((error) => {
				console.error(error);
				return of([]);
			})
		);
	}

	searchCapital(term: string): Observable<Country[]> {
		const query = `${this.apiURL}/capital/${term}`;
		return this.getCountriesRequest(query).pipe(
			tap(
				(countries) => (this.cacheStore.byCapital = { term, countries })
			),
			tap(() => this.saveToLocalStorage())
		);
	}

	searchCountry(term: string): Observable<Country[]> {
		const query = `${this.apiURL}/name/${term}`;
		return this.getCountriesRequest(query).pipe(
			tap(
				(countries) => (this.cacheStore.byCountry = { term, countries })
			),
			tap(() => this.saveToLocalStorage())
		);
	}

	searchRegion(region: Region): Observable<Country[]> {
		const query = `${this.apiURL}/region/${region}`;
		return this.getCountriesRequest(query).pipe(
			tap(
				(countries) =>
					(this.cacheStore.byRegion = { region, countries })
			),
			tap(() => this.saveToLocalStorage())
		);
	}
}
