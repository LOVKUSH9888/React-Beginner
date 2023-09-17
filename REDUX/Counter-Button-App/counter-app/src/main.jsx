import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Importing 
import store from './Store';
// Imp. Provider
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* Wrapping App within Provider */}
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
