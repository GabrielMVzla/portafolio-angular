import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { IEquipo, IArrayEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  equipos?: IEquipo[] = [];

  constructor(private httpClient: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() 
  {
    this.httpClient.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo() 
  {
    this.httpClient.get('https://angular-html-5fad1-default-rtdb.firebaseio.com/.json')
    .subscribe( (resp: IArrayEquipo ) => {
      this.equipos = resp.equipo;
      console.log( resp.equipo );
  });
  }
}
