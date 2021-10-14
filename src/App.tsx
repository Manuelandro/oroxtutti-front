import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import LeftMenu from './components/LeftMenu'
import RightMenu from './components/RightMenu'
import Home from './pages/home'
import Cart from './pages/cart'

const App: React.FC = () => {
  return (
    <>
    <CssBaseline />
    <div className="App">
        <LeftMenu />
        <RightMenu />
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/">
                    <Cart />
                </Route>
            </Switch>
        </Router>
    </div>
    </>
  );
}

export default App;
