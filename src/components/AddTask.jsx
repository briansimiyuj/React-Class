import { useState } from 'react'

const AddTask = ({ addTask }) =>{

    const [text, setText] = useState(''),

          [day, setDay] = useState(''),

          [reminder, setReminder] = useState(false)


    const onSubmit = (e) =>{
    
       e.preventDefault()


       if(!text){

            alert('Please add task') 
            
            return

       }

       addTask({ text, day, reminder })


       setText('')

       setDay('')

       setReminder(false)
    
    }


    return(

        <form onSubmit={onSubmit}>
        
            <div className="form-control">

                <label htmlFor="">Task</label>

                <input 
                    type="text" 
                    placeholder="Add Task"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />

            </div>


            <div className="form-control">

                <label htmlFor="">Day & Time</label>

                <input 
                    type="text" 
                    placeholder="Add Day & Time"
                    value={day}
                    onChange={e => setDay(e.target.value)}
                />

            </div>


            <div className="form-control form-control-check">

                <label htmlFor="">Set Reminder</label>

                <input 
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={e => setReminder(e.currentTarget.checked)}
                />

            </div>


            <input type="submit" value="Save Task" className="btn btn-block"/>

        </form>

    )

}

export default AddTask