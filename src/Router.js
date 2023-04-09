import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AllProducts from './pages/AllProducts';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
import ProtectedRoute from './pages/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      {
        path: '/products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      { path: '/products/:id', element: <ProductDetail /> },
      {
        path: '/carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
