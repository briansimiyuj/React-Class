import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function TaskDetails(){

    const [loading, setLoading] = useState(true),

          [task, setTask] = useState({}),

          [error, setError] = useState(null),


        params = useParams()

    
        useEffect(() =>{
    
        const fetchTask = async() =>{
  
            const response = await fetch(`http://localhost:5000/tasks/${params.id}`),
        
                  data = await response.json()
        
            setTask(data)

            setLoading(false)
          
        }

        fetchTask()
    
    })



    return loading?(

        <h3>Loading...</h3>

    ):(

        <div>

            <h3>{task.text}</h3>

            <p>{task.day}</p>

        </div>

    )

}

export default TaskDetails