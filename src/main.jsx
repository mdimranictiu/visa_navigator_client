import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import User from "./components/User/User.jsx";
import AddVisa from "./components/AddVisa/AddVisa.jsx";
import Register from "./components/Register/Register.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import AllVIsas from "./components/AllVisas/AllVIsas.jsx";
import VisaDetails from "./components/VisaDetails/VisaDetails.jsx";
import MyAddedVisas from "./components/MyAddedVisa/MyAddedVisas.jsx";
import MyVisaApplications from "./components/MyVisaApplications/MyVisaApplications.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'/user',
        element:<User></User>
      }
      ,{
        path:'/AddVisa',
        element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>
      }
      ,{
        path:'/register',
        element: <Register></Register>
      }
      ,{
        path:'/login',
        element:<LogIn></LogIn>
      }
      ,{
        path:'/Allvisas',
        element:<AllVIsas></AllVIsas>,
        loader: ()=>fetch('https://visa-navigator-server-nine.vercel.app/Allvisas')
      }
      ,{
        path:'/visaDetails/:id',
        element:<PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
        loader: ({params})=>fetch(`https://visa-navigator-server-nine.vercel.app/Allvisas/${params.id}`)
      }
      ,{
        path:'/Myaddedvisas/:email',
        element:<PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
        loader: ({params})=>
          fetch(`https://visa-navigator-server-nine.vercel.app/myallvisa/?email=${params.email}`)
      }
      ,{
        path:'/MyVisaApplications/:email',
        element:<PrivateRoute><MyVisaApplications></MyVisaApplications></PrivateRoute>,
        loader: ({params})=>
          fetch(`https://visa-navigator-server-nine.vercel.app/myapplication/?email=${params.email}`)
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>
);
