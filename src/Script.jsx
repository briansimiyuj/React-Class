import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

function Script() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])


  useEffect(() =>{

    const getTasks = async() =>{
    
      const taskFromServer = await fetchTasks()

      setTasks(taskFromServer)
    
    }

    getTasks()
  
  }, [])

  
  const fetchTasks = async() =>{
  
    const response = await fetch("http://localhost:5000/tasks"),

          data = await response.json()

    return data
  
  }


  const addTask = (task) =>{
  
    const id = Math.floor(Math.random() * 1000) + 1,

          newTask = { id, ...task }

    
    setTasks([...tasks, newTask])
  
  }


  const deleteTask = async(id) =>{

    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" })
  
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