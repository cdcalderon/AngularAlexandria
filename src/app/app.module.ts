import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import {AuthModule} from './auth/auth.module';

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
    APP_ROUTING,
    AuthModule,
    HomeModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
