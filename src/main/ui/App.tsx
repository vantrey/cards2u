import React from 'react';
import './App.css';
import Main from "./components/Main";
import {Provider} from "react-redux";
import store from "../bll/store/store";
import {HashRouter} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Main/>
        </HashRouter>
      </Provider>
    </div>
  )
}

export default App;
