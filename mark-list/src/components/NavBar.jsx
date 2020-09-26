import React from "react"
import { Link } from "react-router-dom"

function NavBar () {
    return (
        <div>
            <Link to="/">HOME</Link>
            <Link to="/students">STUDENTS</Link>
            <Link to="/form">FORM</Link>
        </div>
    )
}

export default NavBar