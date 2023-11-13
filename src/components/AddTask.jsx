import { useState } from 'react'

const AddTask = () =>{

    const [text, setText] = useState(''),

          [day, setDay] = useState(''),

          [reminder, setReminder] = useState(false)

    return(

        <form>
        
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
                    value={reminder}
                    onChange={e => setReminder(e.currentTarget.checked)}
                />

            </div>


            <input type="submit" value="Save Task" className="btn btn-block"/>

        </form>

    )

}

export default AddTask