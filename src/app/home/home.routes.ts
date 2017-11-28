import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';

const HOME_ROUTES: Routes = [{
  path: '',
  component: HomeComponent
}];

export const HOME_ROUTING = RouterModule.forChild(HOME_ROUTES);
