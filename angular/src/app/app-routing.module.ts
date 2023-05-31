import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: 'secured',
    loadChildren: () => import('./features/protected-view/protected-view.module').then(m => m.ProtectedViewModule),
  },
  {
    path: 'home',
    component: HomeComponent,    
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
