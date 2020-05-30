import React from 'react';
import styles from './Main.module.css'

const Root = () => {
    return (
        <div className={styles.root}>
           <h1>Root</h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li></ul>
        </div>
    )
}
export default Root;