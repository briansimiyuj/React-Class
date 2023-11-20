import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
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
  
  
  const fetchTask = async(id) =>{
  
    const response = await fetch(`http://localhost:5000/tasks/${id}`),

          data = await response.json()

    return data
  
  }


  const addTask = async(task) =>{
  
    const response = await fetch("http://localhost:5000/tasks", { 

      method: "POST",

      headers:{
        "Content-type": "application/json"
      },

      body: JSON.stringify(task)

    }),

      data = await response.json()

      setTasks([...tasks, data])
  
  }


  const deleteTask = async(id) =>{

    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" })
  
    setTasks(tasks.filter(task => task.id !== id))
  
  }


  const toggleReminder = async(id) =>{

    const toggleTask = await fetchTask(id),

          updatedTask = { ...toggleTask, reminder: !toggleTask.reminder },

          response = await fetch(`http://localhost:5000/tasks/${id}`, {

            method: "PUT",

            headers: { "Content-type": "application/json" },

            body: JSON.stringify(updatedTask)

          }),

          data = await response.json()

    
      setTasks(tasks.map(task => 
  
        task.id === id ? 
      
        { ...task, reminder: data.reminder } 
      
        : task
          
      ))
  
  }


  return (

    <Router>

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

        <Route path='/about' component={About}/>

        <Footer/>

      </div>

    </Router>
   
  )
}

export default Script