import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {

  title = "Lista de Compras"

  mercadorias = [
    {ID: 1, descricao : "Arroz", quantidade : 1},
    {ID: 2, descricao : "Feijão", quantidade : 5},
    {ID: 3, descricao : "Óleo", quantidade : 2},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
