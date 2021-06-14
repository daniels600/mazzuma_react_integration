//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import PaymentTransac from './components/PaymentTransac';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import CheckBalance from './pages/check_balancePage';
import TransactionStatus from './pages/transaction_status';
import VerifyAccount from './pages/verifyAccount';
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
