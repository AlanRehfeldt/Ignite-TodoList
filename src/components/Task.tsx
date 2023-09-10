import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

export interface taskType {
    id: string
    title: string
    isComplet: boolean
}

export interface taskProps {
    task: taskType
}

export function Task({ task }: taskProps) {
    return (
        <div className={styles.task}>
            <label className={styles.customCheckbox}>
                <input type="checkbox" />
                <span></span>
            </label>
            <p
                className={ task.isComplet ? styles.dashed : '' }
            >
                { task.title }
            </p>
            <Trash size={28} className={styles.deleteButton} />
        </div>
    )
}