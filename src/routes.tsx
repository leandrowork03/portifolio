import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { Contato } from "./pages/contato";

import { Layout } from "./components/layout";

const router = createBrowserRouter([
   {
    element:<Layout/>,
    children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/sobre",
                element:<Sobre/>
            },
            {
                path:"/contato",
                element:<Contato/>
            }       
    ]
   }
])
export {router}


