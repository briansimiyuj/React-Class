import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from './Button'

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

            <Button text='Go Back' onClick={() =>{
            
               navigate(-1)
            
            }}/>

        </div>

    )

}

export default TaskDetails