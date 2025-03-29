import React from 'react'
import ReactDOM from 'react-dom/client'
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'

// import App from './App'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <App />
    </AptosWalletAdapterProvider> */}
  </React.StrictMode>,
)
