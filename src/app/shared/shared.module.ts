import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/homePage/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
	declarations: [
		HomePageComponent,
		AboutPageComponent,
		ContactPageComponent,
		SidebarComponent,
		HeaderComponent,
		SearchBoxComponent
	],
	imports: [RouterModule, CommonModule],
	exports: [
		HomePageComponent,
		AboutPageComponent,
		ContactPageComponent,
		SidebarComponent,
		HeaderComponent,
		SearchBoxComponent
	],
	providers: []
})
export class SharedModule {}
