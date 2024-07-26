import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/homePage/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		HomePageComponent,
		AboutPageComponent,
		ContactPageComponent,
		SidebarComponent
	],
	imports: [RouterModule, CommonModule],
	exports: [
		HomePageComponent,
		AboutPageComponent,
		ContactPageComponent,
		SidebarComponent
	],
	providers: []
})
export class SharedModule {}
