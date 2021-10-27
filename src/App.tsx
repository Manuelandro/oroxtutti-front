import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Header from './components/Header'
import LoginRegister from './pages/loginregister'
import Home from './pages/home'
import Category from './pages/category'
import ProductDetail from './pages/productdetail'
import Cart from './pages/cart'
import Account from './pages/account'
import { useAppSelector } from './redux/hooks';

const stripePromise = loadStripe('pk_test_51JjU57BCuKZVEUTZzOUEo2lmQYhREGf0gVSeIjuLQPpyPOSpwuoFmFUksV2e9iO01PIWFsv6Fe5a9JWlTdf21rfO00Xb5eaWaf')



const monileTheme = createTheme({
  typography: {
    fontFamily: `"Montserrat"`,
    fontWeightLight: 100,
    fontSize: 11
  },
  palette: {
    primary: {
      main: '#666'
    }
  }
});


const App: React.FC = () => {
  const token = useAppSelector(s => s.customer.token)

  return (
    <ThemeProvider theme={monileTheme}>
      <CssBaseline />
      <div className="App">
          <Router>
              <Header />
              <Switch>
                  <Route path="/" exact>
                      <Home />
                  </Route>
                  <Route path="/category/:category">
                      <Category />
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
                            <Redirect to={{ pathname: "/account" }} />
                          ) : (
                            <LoginRegister />
                          )
                      }
                  </Route>
                  <Route path="/account">
                      {!token ? (
                            <Redirect to={{ pathname: "/login-register" }} />
                          ) : (
                            <Account />
                          )
                      }
                  </Route>
              </Switch>
          </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
