import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'

import { TaskList } from './components/TaskList'
import { taskType } from './components/Task'

import logo from './assets/logo.svg'
import clipboard from './assets/clipboard.svg'

import styles from './App.module.css'
import './global.css'

const tasks: taskType[] = [
  {
    id: uuidv4(),
    title: 'Wash the dishes',
    isComplet: true
  },
  {
    id: uuidv4(),
    title: 'Do laundry',
    isComplet: false
  },
  {
    id: uuidv4(),
    title: 'Study React',
    isComplet: false
  },
  {
    id: uuidv4(),
    title: 'Complete React chanlange',
    isComplet: false
  },
  {
    id: uuidv4(),
      title: 'Call mom',
      isComplet: false
  },
  {
    id: uuidv4(),
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis repellendus hic iste, architecto iure cumque minima consequuntur saepe voluptatibus fugiat cum, accusamus temporibus distinctio esse ab animi maxime officia odio.',
      isComplet: true
  }
]

export function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="" />
      </header>

      <main>
        <div className={styles.newTask}>
          <input 
            type="text" 
            placeholder='Adicione uma nova tarefa'
          />
          <button>
            Criar
            <PlusCircle size={18} />
          </button>
        </div>
        
        <div className={styles.tasksContainer}>
          <div className={styles.tasksCounts}>
            <div className={styles.countTasks}>
              <p>Tarefas criadas</p>
              <span>6</span>
            </div>
            <div className={styles.tasksDone}>
              <p>Concluídas</p>
              <span>3 de 6</span>
            </div>
          </div>
        </div>

        {
          tasks.length > 0 ? <TaskList tasks={tasks}/> : (
            <div className={styles.emptyTaskListContainer}>
              <img src={clipboard} alt="" />
              <h2>Você ainda não tem tarefas cadastradas</h2>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )
        }
      </main>

    </div>
  )
}
