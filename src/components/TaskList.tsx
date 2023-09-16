import { Task, taskType } from './Task'

import styles from './TaskList.module.css'

interface TaskListProps {
    tasks: taskType[]
    onUpdateTask: (taskUpdated: taskType) => void
    onDeleteTask: (taskUpdated: taskType) => void
}

export function TaskList({ tasks, onUpdateTask, onDeleteTask }: TaskListProps) {
    return (
          <div className={styles.tasksList}>
            {
              tasks.map(task => {
                return (
                    <Task 
                        key={task.id} 
                        task={task} 
                        onUpdateTask={onUpdateTask}
                        onDeleteTask={onDeleteTask} 
                    />
                )
              })
            }
          </div>

    )
}