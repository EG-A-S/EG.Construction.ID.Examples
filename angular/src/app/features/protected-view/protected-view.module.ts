import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { CanActivateGuard as ActivateGuard } from '../../auth/can-ativate.guard';



@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        canActivate: [ActivateGuard],
      }
    ])
  ],
})
export class ProtectedViewModule { }
