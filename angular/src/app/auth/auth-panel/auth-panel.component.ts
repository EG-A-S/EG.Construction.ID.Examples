import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, map, take } from 'rxjs';

@Component({
  selector: 'app-auth-panel',
  templateUrl: './auth-panel.component.html',
  styleUrls: ['./auth-panel.component.scss']
})
export class AuthPanelComponent implements OnInit {


  constructor(private oidcSecurityService: OidcSecurityService) { }

  authState$!: Observable<{ isAuthenticated: boolean, userData: any }>;

  ngOnInit(): void {
    this.authState$ = this.oidcSecurityService.checkAuth();
  }

  login(): void {
    this.oidcSecurityService.authorize();
  }


  logout(): void {
    this.oidcSecurityService.logoff().pipe(take(1)).subscribe();
  }
}
