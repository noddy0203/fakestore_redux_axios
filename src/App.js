import React from 'react'
import {BrowserRouter , Route , Switch} from "react-router-dom"
import Header from "./components/Header.js"
// import ProductComponent from "./components/ProductComponent.js"
import ProductList from "./components/ProductList.js"
import ProductDetail from "./components/ProductDetail.js"
const App = () => {
  return (
    <>
<BrowserRouter>
    <Header />
<Switch>
   <Route path="/" exact component={ProductList} />
   <Route path="/product/:productId" exact component={ProductDetail} />
   <Route>404 not found</Route>
</ Switch>
</ BrowserRouter>
    </>
  )
}

export default App
