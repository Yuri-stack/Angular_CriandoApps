import { Component, OnInit } from '@angular/core';
import { MercadoriaService } from '../mercadoria.service';
import { Mercadoria } from '../mercadoria';
@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {

  title = "Lista de Compras"

  mercadorias: Mercadoria[];

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

  constructor(private mercadoriaService: MercadoriaService) { }

  ngOnInit(): void {
    this.getMercadorias();
  }

  getMercadorias(): void {
    this.mercadorias = this.mercadoriaService.getMercadorias();
  }

}
