import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {

  title = "Lista de Compras"

  mercadorias = [
    {ID: 1, descricao : "Arroz", quantidadeEstoque : 1, quantidadeMinima: 2},
    {ID: 2, descricao : "Feijão", quantidadeEstoque : 5, quantidadeMinima: 3},
    {ID: 3, descricao : "Óleo", quantidadeEstoque : 2, quantidadeMinima: 2},
  ]

  novaMercadoria = {
    ID: 4, descricao : "Sal", quantidadeEstoque : 2, quantidadeMinima: 1
  }

  adicionarMercadoria(){
    this.mercadorias.push({
      ID: this.novaMercadoria.ID,
      descricao: this.novaMercadoria.descricao,
      quantidadeEstoque: this.novaMercadoria.quantidadeEstoque,
      quantidadeMinima: this.novaMercadoria.quantidadeMinima
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
