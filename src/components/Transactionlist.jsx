import React from "react";
import { useContext } from "react";
import {GlobalContext} from "../context/GlobalStates";
import { Transaction } from "./Transaction";

const TransactionList = () =>{
    const { transactions } = useContext(GlobalContext);
    // console.log(context.transactions);
    return(
        <>
        <h3>History</h3>
        <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}  
        </ul>
        </>
    );


}

export default TransactionList;