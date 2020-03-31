import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [AppComponent,ContrasenaPipe,DomseguroPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
