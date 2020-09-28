import React from "react"
import {Link} from "react-router-dom"

function Footer() {
    return (
        <div className="bg-dark text-light">
            <div className="container p-5">
                <input type="text" placeholder="Enter the name of student" />
                <div className="row my-3 mt-5">
                    <div className="col-3 offset-1 pr-5">
                        <h5>Student</h5>
                        <small>All Report statements and the information is available here!</small>
                    </div>
                    <div className="col-3">
                        <h5>Classes</h5>
                        <small>class 10</small><br/>
                        <small>class 9</small><br/>
                        <small>class 8</small><br/>
                        <small>class 7</small><br/>
                        <small>class 6</small><br/>
                        <small>class 5</small><br/>
                        <small>class 4</small><br/>
                        <small>class 3</small><br/>
                        <small>class 2</small><br/>
                        <small>class 1</small>
                    </div>
                    <div className="col-4">
                        <h5>Locations</h5>
                    </div>
                </div>
                <div className="my-3">
                    <h3>Follow Us</h3>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384053.svg" alt="facebook" width="20px" className="mr-3" />
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg" alt="Instagram" width="23px" className="mr-3" />
                    <img src="https://www.flaticon.com/svg/static/icons/svg/124/124034.svg" alt="whatsapp" width="22px" className="mr-3" />
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384060.svg" alt="Youtube" width="22px" className="mr-3" />
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/3256/3256016.svg" alt="linkedIN" width="22px" className="mr-3" />
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1409/1409937.svg" alt="twitter" width="22px" className="mr-3" />
                </div>
                <div className="my-3">
                    <h3>About</h3>
                    <p>We are providing the the marks report card and all the information. If you u want to contact with us please contact to the following number</p>
                    <p>Phone Number : <b>9876543210</b></p>
                </div>
                <div className="font-weight-bolder text-center mb-4">
                    <Link className="text-light mx-5" to="/">HOME</Link>
                    <Link className="text-light mx-5" to="/students">STUDENTS</Link>
                    <Link className="text-light mx-5" to="/form">FORM</Link>
                </div>
                <div className="text-center">
                    <small>Copyright @2020 Student Marks List</small>
                </div>
            </div>
        </div>
    )
}

export default Footer