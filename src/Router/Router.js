import Addservices from "../Pages/AddServicess/Addservices";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import Details from "../Pages/Details/Details";
import EditReveiw from "../Pages/EditRevew/EditReveiw";
import F4f from "../Pages/F4f";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import SingUp from "../Pages/SingUp/SingUp";
import PrivetRout from "../PrivetRout/PrivetRout";

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
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/myreviews/:email',
                element:<PrivetRout><MyReview></MyReview></PrivetRout>,
                loader:({params})=>fetch(`http://localhost:5000/myreviews/${params.email}`)
            },
            {
                path:'/addservice',
                element:<PrivetRout><Addservices></Addservices></PrivetRout>
            },
            {
                path:'/myreviews/edit/:id',
                element:<EditReveiw></EditReveiw>,
                loader:({params})=>fetch(`http://localhost:5000/myreviews/edit/${params.id}`)
            }

           
        ]
    },
    {
        path:'*',
        element:<F4f></F4f>
    }
  
])

export default router;