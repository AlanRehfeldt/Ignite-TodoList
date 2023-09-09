import { PlusCircle } from 'phosphor-react'

import { Task } from './components/Task'

import logo from './assets/logo.svg'

import styles from './App.module.css'
import './global.css'

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
              <span>5</span>
            </div>
            <div className={styles.tasksDone}>
              <p>Concluídas</p>
              <span>3 de 5</span>
            </div>
          </div>
          <div className={styles.tasksList}>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </div>

        </div>


      </main>

    </div>
  )
}
