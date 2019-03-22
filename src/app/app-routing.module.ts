import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanlistComponent } from './components/planlist/planlist.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: 'plans', component: PlanlistComponent},
  {path: 'users', component: TableComponent},
  {path: 'types', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
