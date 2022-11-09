import AllServices from "../Pages/AllServices/AllServices";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/service')

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singup',
                element:<SingUp></SingUp>
            },
            {
                path:'/services',
                element:<AllServices> </AllServices>,
                loader:()=> fetch('http://localhost:5000/allservice')

            },
            {
                //http://localhost:5000/services/636b4bd0774bc73e7540bf97
                path:'/services/:id',
                 loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
                element:<Details></Details>
            }

           
        ]
    }
  
])

export default router;