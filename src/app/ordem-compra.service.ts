import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from './app.api';
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {
  constructor(private http: HttpClient) {}

  public efetivarCompra(pedido: Pedido): Observable<any> {
    console.log(pedido);
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    return this.http.post(
      `${URL_API}/pedidos`,
      pedido,
      {headers: headers}
    )
    .pipe(map((resposta: any) => {
      console.log(resposta);
    }))
  }
}
