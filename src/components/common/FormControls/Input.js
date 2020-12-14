import styles from './forms.module.css';
import React from "react";

let Input = ({input, meta, ...props}) => {
    const isError = meta.error && meta.visited && !meta.active;
return (
    <div className={isError ? styles.error : ''}>
        <input {...input} {...props}/>
        <div className={styles.message}>{isError ? meta.error : ''}</div>
    </div>
)
}

export default Input;