import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';
import { HOME_ROUTING } from './home.routes';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    HOME_ROUTING,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
