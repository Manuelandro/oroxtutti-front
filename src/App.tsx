import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Header from './components/Header'
import RightMenu from './components/RightMenu'
import LoginRegister from './pages/loginregister'
import Home from './pages/home'
import ProductDetail from './pages/productdetail'
import Cart from './pages/cart'
import { useAppSelector } from './redux/hooks';


const stripePromise = loadStripe('pk_test_51JjU57BCuKZVEUTZzOUEo2lmQYhREGf0gVSeIjuLQPpyPOSpwuoFmFUksV2e9iO01PIWFsv6Fe5a9JWlTdf21rfO00Xb5eaWaf')


const App: React.FC = () => {
  const token = useAppSelector(s => s.user.token)

  return (
    <>
    <CssBaseline />
    <div className="App">
        <Header />
        <RightMenu />
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/product/:id">
                    <ProductDetail />
                </Route>
                <Route path="/cart">
                    {!token ? (
                            <Redirect to={{ pathname: "/login-register" }} />
                        ) : (
                          <Elements stripe={stripePromise}>
                            <Cart />
                          </Elements>
                        )
                    }
                </Route>
                <Route path="/login-register">
                    {token ? (
                          <Redirect to={{ pathname: "/" }} />
                        ) : (
                          <LoginRegister />
                        )
                    }
                </Route>
            </Switch>
        </Router>
    </div>
    </>
  );
}

export default App;
