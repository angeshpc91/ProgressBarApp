import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgressPageComponent } from './progress-page/progress-page.component';


const routes: Routes = [
  { path: '', component: ProgressPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
