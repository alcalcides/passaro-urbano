import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService],
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: string = "";
  constructor(
    private route: ActivatedRoute,
    private ofertasServices: OfertasService
  ) {}

  ngOnInit(): void {
    let id = this.route.parent?.snapshot.params['id'];
    console.log('Id da rota pai', id);
    this.ofertasServices.getComoUsarOfertaPorId(id)
      .then((resposta: string) => {
        console.log(resposta);
        this.comoUsar = resposta;
      })
  }
}
