import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'

function TaskDetails(){

    const [loading, setLoading] = useState(true),

          [task, setTask] = useState({}),

          [error, setError] = useState(null),


        params = useParams()

    
        useEffect(() =>{
    
        const fetchTask = async() =>{
  
            const response = await fetch(`http://localhost:5000/tasks/${params.id}`),
        
                  data = await response.json()


            if(response.status === 404){

                setError('Task not foung')
                
            }
        
            setTask(data)

            setLoading(false)
          
        }

        fetchTask()
    
    })


    if(error){

        return <Navigate to='/'/>
        
    }


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