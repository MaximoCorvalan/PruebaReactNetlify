import "../Card/CardProducts.css";

import { useMamaClara } from "../../Context/ContextMamaClara";
import type { Producto } from "../../Interfaces/Productos";

interface CardProductProps {
  Producto: Producto;
}
export const CardProduct = ({ Producto }: CardProductProps) => {

  const UseContext = useMamaClara();

  return (
    <div className="Product__Card">
      <img className="imgCont" src={Producto.urlImage}></img>

      <div className="Producto__Description">
        <h4 className="Producto__Name">{Producto.nombre}</h4>
        <p>{Producto.descripcion}</p>
      </div>

      <div className="Producto__Market">
        <p className="Market__price">${Producto.precio}</p>

        <div className="quantity">
          <button
            className="qty-btn"
            onClick={() => {
              const Val =Producto.cantidad??0
              if (Val > 0) {
            

                const Productos = UseContext.Productos;
                UseContext.SetProductos(
                  Productos.map((item) => {
                    if (item.id === Producto.id) {
                      return {
                        ...item,
                        cantidad: (item.cantidad ?? 0) - 1,
                      };
                    }
                    return item;
                  })
                );
                UseContext.setPrecio(UseContext.precioTotal - Producto.precio);
              }
            }}
          >
            −
          </button>
          <span className="qty-number">{Producto.cantidad ??0}</span>
          <button
            className="qty-btn"
            onClick={() => {
       
                const Productos = UseContext.Productos;
                UseContext.SetProductos(
                  Productos.map((item) => {
                    if (item.id === Producto.id) {
                      return {
                        ...item,
                        cantidad: (item.cantidad ?? 0) + 1,
                      };
                    }
                    return item;
                  })
                );
              UseContext.setPrecio(UseContext.precioTotal + Producto.precio);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
