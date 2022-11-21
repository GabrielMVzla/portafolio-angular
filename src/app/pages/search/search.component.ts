import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { IProducto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productosFiltrados: IProducto[] = [];

  constructor( private route: ActivatedRoute, public productosService: ProductosService) { 
    this.productosFiltrados = productosService.productoFiltrado;
  }

  ngOnInit(): void {
    this.route.params
    .subscribe( params => {
      console.log(params['termino']);
      this.productosService.buscarProducto( params['termino'] );
    });
  }

}
