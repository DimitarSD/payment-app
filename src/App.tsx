import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { setMessage } from "./redux/reducer";

import TransactionTable from "./components/TransactionTable/TransactionTable";

import * as styles from "./App.module.css";

const App = () => {
  const message = useSelector((state: RootState) => state.message);
  const dispatch = useDispatch();

  return <TransactionTable />
};

export default App;
