import React from 'react'
import ReactDOM from 'react-dom/client'
import Listing from './App.jsx'
import './index.css'
import jsonData from './data.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    {jsonData.map((product, index) => (
      <Listing
        key={index}
        url={product.url}
        title={product.title}
        mainImg={product.MainImage}
        quantity={product.quantity}
        price={product.price}
        currency_code={product.currency_code}
      />
    ))}
  </>,
  </React.StrictMode>,
)
