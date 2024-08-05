import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { routes } from '../../../countries/countries-routing.module';

@Component({
	selector: 'shared-sidebar',
	templateUrl: 'sidebar.component.html',
	styleUrl: 'sidebar.component.css'
})
export class SidebarComponent {
	public routes: Route[] = routes;

	constructor() {}
}
