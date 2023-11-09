import PropTypes from 'prop-types'

const Header = ({ title }) =>{

    return(

        <header>
        
            <h1 style={headerStyles}>{title}</h1>
        
        </header>

    )

}


const headerStyles ={
    color: "red",
    backgroundColor: "yellow"
}

export default Header