import { Task, taskType } from './Task'

import styles from './TaskList.module.css'

interface TaskListProps {
    tasks: taskType[]
}

export function TaskList({ tasks }: TaskListProps) {
    return (
          <div className={styles.tasksList}>
            {
              tasks.map(task => {
                return (
                  <Task key={task.id} task={task} />
                )
              })
            }
          </div>

    )
}