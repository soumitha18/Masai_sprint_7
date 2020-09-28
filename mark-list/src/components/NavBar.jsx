import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className="container-fluid bg-secondary fixed-top p-3 font-weight-bolder text-center">
            <Link className="text-light mx-5" to="/">HOME</Link>
            <Link className="text-light mx-5" to="/students">STUDENTS</Link>
            <Link className="text-light mx-5" to="/form">FORM</Link>
        </div>
    )
}

export default NavBar