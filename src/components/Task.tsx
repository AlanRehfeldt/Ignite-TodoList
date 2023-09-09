import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Task() {
    return (
        <div className={styles.task}>
            <label className={styles.customCheckbox}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
            </label>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nisi quas blanditiis ipsam similique.</p>
            <Trash size={24} />
        </div>
    )
}