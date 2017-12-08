import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AUTH_ROUTING } from './auth.routes';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    AUTH_ROUTING,
    SharedModule

  ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }
