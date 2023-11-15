import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function Script() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])


  const addTask = (task) =>{
  
    const id = Math.floor(Math.random() * 1000) + 1,

          newTask = { id, ...task }

    
    setTasks([...tasks, newTask])
  
  }


  const deleteTask = (id) =>{
  
    setTasks(tasks.filter(task => task.id !== id))
  
  }


  const toggleReminder = (id) =>{
  
    setTasks(tasks.map(task => 
      
      task.id === id ? 
    
      { ...task, reminder: !task.reminder } 
    
      : task
        
    ))
  
  }


  return (

    <div className="script">

      <Header title='Task Tracker' setShowAddTask={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>

      {showAddTask && <AddTask addTask={addTask}/>}

      {

        tasks.length > 0 ?

          <Tasks 
            tasks={tasks} 
            deleteTask={deleteTask} 
            toggleReminder={toggleReminder}
          />
        :

         'No tasks to show'

      }

    </div>
   
  )
}

export default Script