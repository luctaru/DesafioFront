import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanlistComponent } from './components/planlist/planlist.component';

const routes: Routes = [
  {path: 'plans', component: PlanlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
