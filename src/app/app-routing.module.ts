import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadComponent: () =>
			import('./home/home-page/home-page.component').then(
				mod => mod.HomePageComponent
			),
	},
	{
		path: 'about',
		loadComponent: () =>
			import('./about/about-page/about-page.component').then(
				mod => mod.AboutPageComponent
			),
	},
	{
		path: 'services',
		loadComponent: () =>
			import('./services/services-page/services-page.component').then(
				mod => mod.ServicesPageComponent
			),
	},
	{
		path: 'testimonials',
		loadComponent: () =>
			import('./testimonial/testimonial-page/testimonial-page.component').then(
				mod => mod.TestimonialPageComponent
			),
	},
	{
		path: 'gallery',
		loadComponent: () =>
			import('./gallery/gallery-page/gallery-page.component').then(
				mod => mod.GalleryPageComponent
			),
	},
	{
		path: 'clients',
		loadComponent: () =>
			import('./clients/clients-page/clients-page.component').then(
				mod => mod.ClientsPageComponent
			),
	},
	{
		path: 'pricing',
		loadComponent: () =>
			import('./pricing/pricing-page/pricing-page.component').then(
				mod => mod.PricingPageComponent
			),
	},
	{
		path: '404',
		loadChildren: () =>
			import('./notfound/notfound-page/notfound-page.component').then(
				mod => mod.NotfoundPageComponent
			),
	},
	{ path: '**', redirectTo: '/404' },
];

@NgModule({
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: [],
})
export class AppRoutingModule {}
