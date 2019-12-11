import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <headher>
            <h1>To-Do App</h1>
            <nav>
                <Link to={'/'}>Home</Link> | 
                <Link to={'/todos'}>To-Do's</Link>
            </nav>
        </headher>
    )
}

export default Header