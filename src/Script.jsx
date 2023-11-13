import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function Script() {

  const [tasks, setTasks] = useState([

    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },

    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },

    {
      "id": 3,
      "text": "Food Shopping",
      "day": "Feb 7th at 2:30pm",
      "reminder": false
    }
    
  ])


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

      <Header title='Task Tracker'/>

      <AddTask/>

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