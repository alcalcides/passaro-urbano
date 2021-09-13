import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco:string = 'Rua xyz'
  public numero:number = 10
  public complemento: string = 'Casa B'
  public formaPagamento: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
