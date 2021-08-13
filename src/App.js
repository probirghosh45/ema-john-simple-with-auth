import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import React, {createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NoMatch from "./components/NoMatch/NoMatch";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";
import Shipment from "./Shipment/Shipment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App() {
  const [loggedUserData, setLoggedUserData] = useState({})
  return (
    <UserContext.Provider value={[loggedUserData, setLoggedUserData]}>
          <Router>
            <Header></Header>
              <Switch>
              <Route exact path="/">
                  <Shop/>
                </Route>
                <Route path="/shop">
                  <Shop/>
                </Route>
                <Route path="/review">
                  <Review/>
                </Route>

                <Route path="/product/:productKey">
                  <ProductDetails/>
                </Route>
                <PrivateRoute path="/shipment">
                  <Shipment/>
                </PrivateRoute>
                <PrivateRoute path="/inventory">
                  <Inventory/>
                </PrivateRoute>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="*">
                   <NoMatch/>
                </Route>
              </Switch>
          </Router>
    </UserContext.Provider>
  );
}

export default App;
