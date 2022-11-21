import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducto, IProductos } from '../interfaces/producto.interface';
import { IProductoDetalle } from '../interfaces/producto-detalles.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public cargando: boolean = true;
  public productos: IProducto[] = [];
  public productoFiltrado: IProducto[] = [];

  private url: string = 'https://angular-html-5fad1-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos()
  {
    return new Promise( (resolve, reject) => {

      this.http.get(`${this.url}productos_idx.json`)
      .subscribe( (resp: any)=> {
        this.cargando = false;
        
        resp.forEach( ( element: any, index: number)  => {
  
          this.productos.push({
            'categoria' : element['categoria'],
            'cod' : element['cod'],
            'titulo' : element['titulo'],
            'url' : element['url']
          });
        });

        resolve('prodService-cargarProductos');
      });
      
    });
    
  }


  public getProducto(id: string)
  {
    return this.http.get(`${ this.url }productos/${ id }/.json`);
  }

  public buscarProducto(termino: string){
    if(this.productos.length === 0){
      this.cargarProductos().then( () => {
        this.filtrarProductos( termino );
      });
    } else {
      
      this.filtrarProductos( termino );
    }
  }
  
  private filtrarProductos(termino: string){
    
    termino = termino.toLocaleLowerCase();

    this.productoFiltrado = [];

    this.productos.forEach( prod => {
      if ( prod.categoria.toLowerCase().indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0){
        this.productoFiltrado.push(prod);
      }

    });
  }
}
