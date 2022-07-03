import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';
// import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el local de la app
import localEs from '@angular/common/locales/es-EC';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide:LOCALE_ID,useValue:'es-EC'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
