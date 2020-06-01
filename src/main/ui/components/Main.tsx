import React from 'react';
import styles from './Main.module.css'
import Header from "./header/Header";
import Root from './root/Root';
import Menu from './menu/Menu';

const Main = () => {
  return  <div >
    <Header/>
    <div className={styles.main__wrap}>
      <Root/>
      <Menu/>
    </div>

    {/*<Test/>*/}
    {/*<Routs/>*/}

  </div>
}
export default Main