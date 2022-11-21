import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { IProductos, IProducto } from '../../interfaces/producto.interface';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {


  productos: IProducto[] = [];
  constructor(public productosService: ProductosService) 
  { 
    this.productos = productosService.productos;
  }

  ngOnInit(): void {
  }

}
