import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';
import { EditmercadoriaComponent } from './editmercadoria/editmercadoria.component';

const routes: Routes = [
  { path: '', redirectTo:'/mercadorias', pathMatch:'full'},
  { path: 'mercadorias', component: MercadoriasComponent },
  { path: 'mercadorias/edit/:id', component: EditmercadoriaComponent }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
