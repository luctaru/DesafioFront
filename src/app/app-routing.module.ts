import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanlistComponent } from './components/planlist/planlist.component';
import { TableComponent } from './components/table/table.component';
import { DasboardComponent } from './components/dasboard/dasboard.component';

const routes: Routes = [
  {path: 'plans', component: PlanlistComponent},
  {path: 'users', component: TableComponent},
  {path: 'types', component: TableComponent},
  {path: '', component: DasboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
