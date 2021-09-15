import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { Observable, interval, Observer, Subscription } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import CarrinhoService from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService, CarrinhoService],
})
export class OfertaComponent implements OnInit, OnDestroy {
  // private tempoObservableSubscription!: Subscription;
  // private meuObersableTesteSubscription!: Subscription;

  public oferta!: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService,
  ) {}

  ngOnInit(): void {

    console.log('Oferta - Array de itens do carrinho: ', this.carrinhoService.exibirItens())

    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService
        .getOfertaPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        });

    });

    // this.route.params.subscribe(
    //   (parametro: any) => {
    //     console.log(parametro);
    //   },
    //   (error: any) => console.error(error),
    //   () => {
    //     console.log('processamento foi classificado como');
    //   }
    // );

    // let tempo = interval(2000);
    // this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo);
    // });

    // // obervable (observável)
    // let meuObersableTeste = new Observable((observer: Observer<number>) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.complete();
    //   observer.next(5);
    // });

    // // obervable (observável)
    // this.meuObersableTesteSubscription = meuObersableTeste.subscribe(
    //   (resultado: number) => console.log(resultado),
    //   (error: string) => console.log(error),
    //   () => console.log('stream de eventos está completa')
    // );
  }

  ngOnDestroy(): void {
    // this.meuObersableTesteSubscription.unsubscribe();
    // this.tempoObservableSubscription.unsubscribe();
  }
}
