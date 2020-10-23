import { HomeComponent } from './home/home.component';
import { SubsidyComponent } from './subsidy/subsidy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './family/family.component';
import { OrphanComponent } from './orphan/orphan.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'family', component: FamilyComponent},
  {path: 'orphan', component: OrphanComponent},
  {path: 'subsidy', component: SubsidyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
