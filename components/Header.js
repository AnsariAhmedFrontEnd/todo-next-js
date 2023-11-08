import React, { Fragment } from 'react'
import classes from './Header.module.css';
import Todos from './Todos';

const Header =() => {
  return (
    <Fragment>
    <header className={classes.header}>
        <div>
        <h2>Todo App</h2>
        </div>
    </header>
    <Todos />
    </Fragment>
  )
}

export default Header;
