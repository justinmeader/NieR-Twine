import React from 'react';
import styles from './App.module.scss';
import { RoutesPages } from './routes/Routes';
import Game from './Game';

function App() {
  return (
      <div className={styles.App}>
        {/* <NavbarModule/>
        <hr/>
        <div className={styles.dottedspaced}/> */}
        <RoutesPages />
        <Game />
      </div>
  );
}

export default App;
