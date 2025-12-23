


export type Producto =
{
    id :number,
    price:number,
    name:string,
    description:string,
    imgurl:string,
    cantidad?: number  ,
    id_tipo:number  // 👈 opcional
}