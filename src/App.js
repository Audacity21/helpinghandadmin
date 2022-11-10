import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import AddProduct from "./components/Products/AddProduct";
import ViewProducts from "./components/Products/ViewProducts";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route exact path="/addproduct"><AddProduct /></Route>
        <Route exact path="/viewproduct"><ViewProducts /></Route>
      </Switch>
    </Router>
  );
}

export default App;
