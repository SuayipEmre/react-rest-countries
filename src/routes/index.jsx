import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/home";
import CountryDetails from "../pages/countryDetails";



export const routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout />,
        children : [
            {
                index : true,
                element : <Home />
            },
            {
                path :'/countryDetails',
                element : <CountryDetails />
            }
        ]
    }
])
