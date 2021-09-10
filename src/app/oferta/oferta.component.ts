import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
// import { Observable, interval } from 'rxjs';
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

    let tempo = interval(2000)
    tempo.subscribe((intervalo: number) => {
      console.log(intervalo)
    })
  }
}
