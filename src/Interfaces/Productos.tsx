


export type Producto =
{
    id :number,
    precio:number,
    nombre:string,
    descripcion:string,
    urlImage:string,
    cantidad?: number  ,
    tipo:number  // 👈 opcional
}