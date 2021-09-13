import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas!: Observable<Oferta[]>;
  public ofertas2!: Oferta[];
  private subjetcPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjetcPesquisa
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .pipe(
        switchMap((termo: string) => {
          console.log('requisição http para a api');

          if (termo.trim() === '') {
            return of<Oferta[]>([]);
          }

          return this.ofertasService.pesquisaOfertas(termo);
        })
      )
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return of<Oferta[]>([]);
        })
      );

    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas);
      this.ofertas2 = ofertas;
    });
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('key up caractere: ', termoDaBusca);
    this.subjetcPesquisa.next(termoDaBusca);

    // this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca);
    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log('Erro status: ', erro.status),
    //   () => console.log('fluxo de evento completo')
    // );
  }
}
