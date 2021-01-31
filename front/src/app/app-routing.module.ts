import { ParentComponent } from './models/parent/parent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './models/child/child/child.component';

const routes: Routes = [
  { path: '', redirectTo: '/parent', pathMatch: 'full'},
  { path: 'parent', component: ParentComponent },
  { path: 'child/:parentid', component: ChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ParentComponent, ChildComponent];
