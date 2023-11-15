import Button from './Button'

const Header = ({ title, setShowAddTask, showAddTask }) =>{

    return(

        <header className="header">
        
            <h1>{title}</h1>
            
            <Button color={showAddTask ? "red" : "green"} text={showAddTask ? "Close" : "Open"} onClick={setShowAddTask}/>
        
        </header>

    )

}

export default Header