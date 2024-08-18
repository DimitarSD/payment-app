import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import TransactionDetails from "./components/TransactionDetails/TransactionDetails";

import "./styles/globals.module.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/transaction/:unique_id"
          element={<TransactionDetails />}
        />
      </Routes>
    </Router>
  );
};

export default App;
