import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomepageFcn';
import CheckBalance from './pages/CheckBalanceFcn';
import TransactionStatus from './pages/TransactionStatusFcn';
import VerifyAccount from './pages/VerifyAccountFcn';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/homePage' exact component={HomePage} />
        <Route path='/check_balance' component={CheckBalance} />
        <Route path='/transaction_status' component={TransactionStatus} />
        <Route path='/verifyAccount' component={VerifyAccount} />
      </Switch>
    </Router>
       
  );
}

export default App;
