import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

export interface taskType {
    id: string
    title: string
    isComplete: boolean
}

export interface taskProps {
    task: taskType
    onUpdateTask: (taskUpdated: taskType) => void
    onDeleteTask: (taskUpdated: taskType) => void
}

export function Task({ task, onUpdateTask, onDeleteTask }: taskProps) {
    function handleToggleComplete() {
        const updatedTask: taskType = { ...task, isComplete: !task.isComplete }

        onUpdateTask(updatedTask)
    }

    function handleDeleteTask() {
        const updatedTask: taskType = { ...task }

        onDeleteTask(updatedTask)
    }

    return (
        <div className={styles.task}>
            <label 
                className={styles.customCheckbox}
                onChange={ handleToggleComplete }
            >
                <input type="checkbox" />
                <span></span>
            </label>
            <p
                className={ task.isComplete ? styles.dashed : '' }
            >
                { task.title }
            </p>
            <Trash 
                size={28} 
                className={styles.deleteButton} 
                onClick={ handleDeleteTask }
            />
        </div>
    )
}