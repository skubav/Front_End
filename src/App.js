import React from "react";
import { About, Comments, Contacts, Delivery, Gallery, Header, Menu, Promo } from "./containers";
import './app.css'

const App = () => {
  return (
    <div>
      {
      //<Header />
      }
      <About />
      <Menu />
      <Delivery />
      {
        /*
      <Promo />
      <Gallery />
      <Comments />
      <Contacts />
      */
      }
    </div>
    
  )
}

export default App