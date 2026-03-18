import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "./index.css"
import routes from './routes/index.jsx'
import CartProvider from './contexts/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <BrowserRouter>
  //   <Buoi7 />
  // </BrowserRouter>
  <CartProvider>
    <RouterProvider router={routes} />
  </CartProvider>
  // </StrictMode>,
)
