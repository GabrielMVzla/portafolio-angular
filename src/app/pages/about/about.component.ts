import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { IEquipo } from 'src/app/interfaces/info-equipo.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoServiceEquipo: InfoPaginaService) {  
  }

  ngOnInit(): void {
  }

}
