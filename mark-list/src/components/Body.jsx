import React from "react"
import { Route } from "react-router"
import Home from "./Home"
import Students from "./Students"
import StudentForm from "./studentForm"

function Body() {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/students" component={Students} />
            <Route path="/form" component={StudentForm} />
        </div>
    )
}

export default Body