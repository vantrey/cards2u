import React from 'react';
import styles from './Main.module.css'
import Header from "./header/Header";
import Routs from "./routes/Routes";
import Test from "../../features/test/Test";
import Root from "./Root";

const Main = () => {
  return  <div className={styles.header}>
    <Header/>
    <Test/>
    <Root/>
    <Routs/>
  </div>
}
export default Main