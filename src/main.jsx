import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'

import ErrorPage from './components/ErrorPage.jsx';
// import AppRoutes from './routes/AppRoutes.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Dashboard from './pages/Dashboard.jsx';
import GadgetUpdate from './pages/GadgetUpdate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/src/productsData/products.json')
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetails />,
        loader: () => fetch('/src/productsData/products.json'),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/gadget-update",
        element: <GadgetUpdate />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
