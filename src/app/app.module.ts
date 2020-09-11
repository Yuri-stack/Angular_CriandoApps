import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';
import { AppRoutingModule } from './app-routing.module';
import { EditmercadoriaComponent } from './editmercadoria/editmercadoria.component';

@NgModule({
  declarations: [
    AppComponent,
    MercadoriasComponent,
    EditmercadoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
