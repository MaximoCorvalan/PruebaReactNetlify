const BASE_URL ="https://mamaclaraapi.onrender.com/MamaClara/"


export const ObtenerArticulos =async()=>
    {
        try
        {const j =10;

            const response =  await fetch(BASE_URL+"GetMamaClaraItems")
            if(!response.ok)
                {      
                    throw new Error(`Error ${response.status}`);
                }
                const data = await response.json(); // 👈 ACÁ
                
                return data
               

        }catch(error)
        {

             console.error("Error en ObtenerArticulos:", error);
             alert("ERROR AL OBTENER ARTICULOS" + error)
               throw new Error("ERROR AL OBTENER ARTICULOS");
        }

    }