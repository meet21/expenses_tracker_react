import React from "react";
import {Header} from "./components/Header";
import {Balance} from "./components/Balance";
import {IncomeExpenses} from "./components/IncomeExpenses";
import TransactionList from "./components/Transactionlist";
import {AddTransaction} from "./components/AddTransaction";
import {GlobalProvider} from "./context/GlobalStates";
import "./App.css";
import { Footer } from "./components/Footer";

const App = () =>{
  return(
    <>
    {/* <h1>Hello bhai</h1> */}
      <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      </GlobalProvider>
    </>
  )
};
export default App;