import { RegisterComponent } from './features/login/register/register.component';
import { LoginFormComponent } from './features/login/login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { SubsidyComponent } from './subsidy/subsidy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './family/family.component';
import { OrphanComponent } from './orphan/orphan.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'family',
    component: FamilyComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'orphan',
    component: OrphanComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'subsidy',
    component: SubsidyComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
