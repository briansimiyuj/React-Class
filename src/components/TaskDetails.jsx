import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function TaskDetails(){

    const [loading, setLoading] = useState(true),

          [task, setTask] = useState({}),

          [error, setError] = useState(null),


        params = useParams(),

        navigate = useNavigate()

    
        useEffect(() =>{
    
        const fetchTask = async() =>{
  
            const response = await fetch(`http://localhost:5000/tasks/${params.id}`),
        
                  data = await response.json()


            if(response.status === 404){

                navigate('/')
                
            }
        
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