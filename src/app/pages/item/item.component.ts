import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { IProductoDetalle } from '../../interfaces/producto-detalles.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public productoDetalle: IProductoDetalle = {};
  public productoId: string = '';

  constructor(private route: ActivatedRoute, public productoService: ProductosService) 
  {  }

  ngOnInit(): void {
    this.route.params
    .subscribe( parametros => {
      
      console.log
      this.productoId = parametros['id'];

      this.productoService.getProducto(this.productoId)
        .subscribe( (producto: any) => {

          this.productoDetalle = {
            'categoria' : producto['categoria'],
            'desc1' : producto['desc1'],
            'desc2' : producto['desc2'],
            'producto' : producto['producto'],
            'resumen' : producto['resumen'],
            'subtitulo1' : producto['subtitulo1'],
            'subtitulo2' : producto['subtitulo2']
          };
        });
    });
  }

  getProductoDetalle(): IProductoDetalle{
    return this.productoDetalle;
  }
}
