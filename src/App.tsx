import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { setMessage } from "./redux/reducer";

import * as styles from "./App.module.css";

const App = () => {
  const message = useSelector((state: RootState) => state.message);
  const dispatch = useDispatch();

  return <h1 className={styles.title}>hello</h1>;
};

export default App;
