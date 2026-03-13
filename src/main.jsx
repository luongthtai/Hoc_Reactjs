import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "./index.css"
import routes from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <BrowserRouter>
  //   <Buoi7 />
  // </BrowserRouter>
  <RouterProvider router={routes} />
  // </StrictMode>,
)
