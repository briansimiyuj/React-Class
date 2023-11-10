import Button from './Button'

const Header = ({ title }) =>{

    return(

        <header className="header">
        
            <h1>{title}</h1>
            
            <Button color="green" text="Hello" />
            
            <Button color="blue" text="Hello1" />
            
            <Button color="red" text="Hello2" />
        
        </header>

    )

}

export default Header