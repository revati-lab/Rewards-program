import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserRewards from "./Features/UserRewards";
import user from "./Features/UserTransactions";

function App() {
  return (
    <div>
      <UserRewards userTransactions={user} />
    </div>
  );
}

export default App;
