import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

const routes: Routes = [{
  path: '', component: NotfoundPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotfoundRoutingModule { }
