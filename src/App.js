import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Mains from './Layouts/Mains';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsandloders } from './Loders/Productsandloders';

function App() {
  const router=createBrowserRouter([
    {path:'/',
    element:<Mains></Mains>,

    children:[{
      path:'/',
      loader:()=>fetch('products.json'),
      element:<Shop></Shop>
    },
    {
      path:'/orders',
      loader:productsandloders,
      element:<Orders></Orders>
    },
    {
      path:'inventory',
      element:<Inventory></Inventory>
    }
  ]
  },
  {
    path:'/about',
    element:<About></About>
   
  }
  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
