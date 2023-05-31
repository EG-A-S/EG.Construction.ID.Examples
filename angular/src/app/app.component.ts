import { Component } from '@angular/core';
import { PublicEventsService, EventTypes } from 'angular-auth-oidc-client';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'oidcExample';

  constructor(private readonly eventService: PublicEventsService) {
    this.eventService
      .registerForEvents()
      .subscribe((log) => {
        console.table(log);
      });
  }
}
