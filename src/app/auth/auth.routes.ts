import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AuthComponent} from './auth.component';

const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: AuthComponent

  },
  {
    path: 'register',
    component: AuthComponent
  }
];

export const AUTH_ROUTING: ModuleWithProviders = RouterModule.forChild(AUTH_ROUTES);
