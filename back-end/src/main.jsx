import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './DataProvider/DataProvider.jsx'
import { initialState, reducer } from './Utility/Reducer.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialSate={initialState}>
         <App />
    </DataProvider>
    
  </StrictMode>,
)
