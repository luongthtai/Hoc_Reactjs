import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "./index.css"
import routes from './routes/index.jsx'
// import CartProvider from './contexts/cartContext.jsx'
// import CountProvider from './contexts/countContext.jsx'
import { Provider } from 'react-redux'
import store from './reduxs/store.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <BrowserRouter>
  //   <Buoi7 />
  // </BrowserRouter>
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
  // </StrictMode>,
)
