import React, { useContext, useState, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

import "./Transactions.css"; // Import the CSS file for animations

const TransactionsCard = ({ addressTo, addressFrom, message, amount }) => {
  return (
    <div className="transaction-card">
      <div className="flex flex-col items-center w-full mt-4">
        <div className="w-full mb-6 p-3">
          <div className="mb-4">
            <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
              <p className="text-white text-lg">From: {shortenAddress(addressFrom)}</p>
            </a>
          </div>
          <div className="mb-4">
            <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
              <p className="text-white text-lg">To: {shortenAddress(addressTo)}</p>
            </a>
          </div>
          <p className="text-white text-lg">Amount: {amount} ETH</p>
          {message && (
            <p className="text-white text-lg">Message: {message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const transactionsToDisplay = [...dummyData, ...transactions].slice(0, -1);

  return (
    <div className={`flex w-full justify-center items-center gradient-bg-transactions ${animate ? "fade-in" : ""}`}>
      <div className="flex flex-col md:p-12 py-12 px-6">
        <h3 className="text-white text-4xl text-center my-4">
          {currentAccount ? "Latest Transactions" : "Connect your account to see the latest transactions"}
        </h3>
        
       
      </div>
    </div>
  );
};

export default Transactions;
 