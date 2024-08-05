import { NgModule } from '@angular/core';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

@NgModule({
	imports: [CountriesRoutingModule, SharedModule, CommonModule],
	exports: [],
	declarations: [
		ByCapitalPageComponent,
		ByCountryPageComponent,
		ByRegionPageComponent,
		CountryPageComponent,
		CountryTableComponent
	],
	providers: []
})
export class CountriesModule {}
