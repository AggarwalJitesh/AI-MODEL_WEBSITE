//importing useState , useEffect and Web3
import { useState, useEffect } from "react";
import Web3 from "web3";
import Navigation from "../inc/navigation";
import { Link } from "react-router-dom";

function Login() {
  //connected get and set
  const [isConnected, setIsConnected] = useState(false);
  //eth balance get and set
  const [ethBalance, setEthBalance] = useState("");

  //OnConnect
  const onConnect = async () => {
    let instance;
    //get the metemask instance as true
    if (window.ethereum) {
      instance = new Web3(window.ethereum);
      try {
        //awaiting etheruem accounts
        let accountAdd = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("accounts: ", accountAdd);
        //awaiting account balance
        let ethBalance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accountAdd[0], "latest"],
        });
        setEthBalance(ethBalance);
        setIsConnected(true);
      } catch (err) {
        console.error("User denied account access");
        throw new Error("User denied account access");
      }
    } else if (window.web3) {
      instance = new Web3(window.web3.currentProvider);
    } else {
      console.error("No web3 instance found, please install MetaMask");
      throw new Error("No web3 instance found, please install MetaMask");
    }
  };

  const disConnect = () => {
    setIsConnected(false);
  };

  return (
    <div className="app">
      <Navigation />
      <div className="app-header">
        <h1>Authentication with react and Web3 js</h1>
      </div>
      <div className="app-wrapper">
        {!isConnected && (
          <div>
            <button className="app-button_login" onClick={onConnect}>
              Connect Your Wallet
            </button>
          </div>
        )}
      </div>
      {isConnected && (
        <div className="app-wrapper">
          <div className="app-details">
            <h2>Connected to Metamask</h2>
            <div className="app-balance">
              <span>Balance: </span>
              {ethBalance}
            </div>
            <Link to="/upload">Upload Image</Link>
            <Link to="/dashboard">DASHBOARD</Link>
          </div>
          <div>
            <button className="app-button_logout" onClick={disConnect}>
              DisConnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
