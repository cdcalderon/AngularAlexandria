import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomeModule} from './home/home.module';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';

import {
  SharedModule,
  HeaderComponent,
  FooterComponent
} from './shared';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
