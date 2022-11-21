export interface IProductos
{
    producto?: IProducto[];
}

export interface IProducto{
    categoria: string;
    cod: string;
    titulo: string;
    url: string;
}

