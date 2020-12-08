import React from 'react';
import styles from './preloader.module.css'

let Preloader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.l_main}>
                <div className={styles.l_square}><span></span><span></span><span></span></div>
                <div className={styles.l_square}><span></span><span></span><span></span></div>
                <div className={styles.l_square}><span></span><span></span><span></span></div>
                <div className={styles.l_square}><span></span><span></span><span></span></div>
            </div>
        </div>
    );
}

export default Preloader;