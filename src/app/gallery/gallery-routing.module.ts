import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';

const routes: Routes = [{ path: '', component: GalleryPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GalleryRoutingModule {}
