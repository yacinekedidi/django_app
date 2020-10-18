import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './family/family.component';
import { OrphanComponent } from './orphan/orphan.component';

const routes: Routes = [
  {path: 'family', component: FamilyComponent},
  {path: 'orphan', component: OrphanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
