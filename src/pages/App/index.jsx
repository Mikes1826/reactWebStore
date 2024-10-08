import { useRoutes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { SignIn } from '../SignIn';
import { Navbar } from '../../Components/Navbar';
import { NotFound } from '../NotFound';
import { ShoppiCartProvider } from '../../Context';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes ([
    {path: "/", element: <Home />},
    {path: "/clothes", element: <Home />},
    {path: "/electronics", element: <Home />},
    {path: "/furnitures", element: <Home />},
    {path: "/toys", element: <Home />},
    {path: "/others", element: <Home />},
    {path: "/my-account", element: <MyAccount />},
    {path: "/my-order", element: <MyOrder />},
    {path: "/my-orders", element: <MyOrders />},
    {path: "/my-orders/last", element: <MyOrder />},
    {path: "/my-orders/:id", element: <MyOrder />},
    {path: "/sign-in", element: <SignIn />},
    {path: "/*", element: <NotFound />},
  ]);
  return routes;
};

const App = () => {

  return (

    <ShoppiCartProvider>
      <BrowserRouter>
          <AppRoutes/>
          <Navbar/>
          <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppiCartProvider>
  )
}

export default App
