import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, interval, Observer } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit {
  public oferta!: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit(): void {
    this.ofertasService
      .getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
        //console.log(this.oferta)
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

    // let tempo = interval(2000)
    // tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo)
    // })

    // obervable (observável)
    let meuObersableTeste = new Observable((observer: Observer<number>) => {
        observer.next(1)
        observer.next(2)
        observer.next(3)
        observer.complete()
        observer.next(5)
    })


    // obervable (observável)
    meuObersableTeste.subscribe(
      (resultado: number) => console.log(resultado),
      (error: string) => console.log(error),
      () => console.log("stream de eventos está completa")
    )

  }
}
