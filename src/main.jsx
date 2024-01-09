import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/app/index.js'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <RouterProvider router={routes} />
  </Provider>
)
