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
  private subjetcPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjetcPesquisa
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .pipe(
        switchMap((termo: string) => {

          if (termo.trim() === '') {
            return of<Oferta[]>([]);
          }

          return this.ofertasService.pesquisaOfertas(termo);
        })
      )
      .pipe(
        catchError((err: any) => {
          return of<Oferta[]>([]);
        })
      );

  }

  public pesquisa(termoDaBusca: string): void {
    this.subjetcPesquisa.next(termoDaBusca);

  }
}
