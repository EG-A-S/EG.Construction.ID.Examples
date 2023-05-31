import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule, PassedInitialConfig } from 'angular-auth-oidc-client'
import { environment } from 'src/environments/environment.development';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthPanelComponent } from './auth-panel/auth-panel.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


@NgModule({
  declarations: [
    AuthPanelComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    AuthModule.forRoot({ config: environment.authConfig }),
    RouterModule
  ],
  exports: [
    AuthPanelComponent,
    AuthModule,
    UnauthorizedComponent
  ]
})
export class AppAuthModule { }
