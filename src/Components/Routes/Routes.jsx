import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Cart from "../../Pages/Cart/Cart";
import Favourite from "../../Pages/Favourite/Favourite";
import PhoneDetails from "../../Pages/PhoneDetails/PhoneDetails";

export const router = createBrowserRouter([
 {
  path : "/",
  Component : MainLayOut,
  errorElement : <ErrorPage></ErrorPage>,
  children : [
    {
      index : true,
      path : "/",
      Component : Home,
      hydrateFallbackElement: <p className="w-10/12 mx-auto text-center">Loading....</p>,
      loader : ()=>fetch("../phones.json")
    },
    {
      path : "/phonedetails/:id",
      Component: PhoneDetails,
      loader : ()=>fetch("../phones.json")
    },
    {
      path:"about",
      Component: About 
    },
    {
      path:"cart",
      Component : Cart
    },
    {
      path : "favourite",
      hydrateFallbackElement: <p className="w-10/12 mx-auto text-center">Loading....</p>,
      Component : Favourite
    }
  ]
 }
])

