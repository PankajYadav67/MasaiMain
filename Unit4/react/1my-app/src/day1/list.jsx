import React from 'react';
import styles from './List.module.css'

const List  = (props) => {
    console.log(styles)
    return (
        <>
          <h1 className={styles.header}>Student's List</h1>
          <p className={styles.header_list}>MASAI</p>
        </>
    );
};

export default List ;