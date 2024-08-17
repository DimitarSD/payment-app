import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import TransactionDetails from "./components/TransactionDetails/TransactionDetails";

import "./styles/globals.module.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionTable />} />
        <Route
          path="/transaction/:unique_id"
          element={<TransactionDetails />}
        />
      </Routes>
    </Router>
  );
};

export default App;
