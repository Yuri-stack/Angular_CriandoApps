import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';

@NgModule({
  declarations: [
    AppComponent,
    MercadoriasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MercadoriasComponent]
})
export class AppModule { }
