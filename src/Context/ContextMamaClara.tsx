import { createContext, useContext, useState, type ReactNode } from "react";
import type { Producto } from "../Interfaces/Productos,";


type ProviderProps = { children: ReactNode };

type AppContextPizzas =
{
  precioTotal : number,
  setPrecio :(precio:number)=>void;
  Productos: Producto[];
  SetProductos : (Productos:Producto[])=>void;
}

const AppContext = createContext<AppContextPizzas | undefined>(undefined);


export const useMamaClara = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useMamaClara debe usarse dentro de ProviderMamaClara");
  return ctx;
};
export const ProviderMamaClara = ({children}:ProviderProps) => {

  const [precioTotal,setPrecio] = useState<number>(0)
  const [Productos,SetProductos]=useState<Producto[]>([])
  return (
    <AppContext.Provider value={{precioTotal,setPrecio,Productos,SetProductos}}>
      {children}
    </AppContext.Provider>
  )
}
