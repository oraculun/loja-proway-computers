import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
  itensCarinho: IProdutoCarrinho[] = [];

  constructor(
    public carrinhoService: CarrinhoService
  ){ }

  ngOnInit(): void {
    this.itensCarinho = this.carrinhoService.obtemCarrinho();
  }
}
