import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* to make the store globally accessible by all components */}
    {/*  here store is the */}
    <Provider store={store}>
    <App />
    </Provider>
    
  </StrictMode>,
)
