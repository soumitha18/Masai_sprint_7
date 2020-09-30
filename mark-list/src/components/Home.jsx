import React from "react"

function Home() {
    return (
        <div>
            <img src="./1.jpeg" width="100%" style={{ opacity: "0.5" }} class="img-fluid" alt="students"></img>
            <div className="text-center p-2">
                <h2 className="m-4">What is School Report?</h2>
                <p>School Report is a website where user can see the score of students and upload the report.</p>
            </div>
            <div className="pt-2 pb-5 bg-light text-center">
                <h2 className="m-5">How School Report will work</h2>
                <div className="container">
                    <div className="row">
                        <div className="offset-1 col-3 p-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h3 className="card-title">Start</h3>
                                    <div className="card-text">
                                        See the students reports by clicking nav bar
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h3 className="card-title">Enter the Marks</h3>
                                    <div className="card-text">
                                        In student Form u can enter all the details of student
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h3 className="card-title">Edit</h3>
                                    <div className="card-text">
                                        U can edit the report card too
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./1.png" class="d-block w-100" alt="..." height="600px" />
                        </div>
                        <div class="carousel-item">
                            <img src="./2.png" class="d-block w-100" alt="..." height="600px" />
                        </div>
                        <div class="carousel-item">
                            <img src="./3.jpg" class="d-block w-100" alt="..." height="600px" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="container pb-5">
                <div className="row text-center">
                    <div className="col-3">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3248/3248732.svg" alt="student" width="70" />
                        <h5><span className="h1">100000+</span><br /> students</h5>
                    </div>
                    <div className="col-3">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/2883/2883921.svg" alt="schools" width="70" />
                        <h5><span className="h1">1000+</span><br />Schools</h5>
                    </div>
                    <div className="col-3">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/2620/2620669.svg" alt="satisfied" width="70" />
                        <h5><span className="h1">50000+</span><br/>satisfied users</h5>
                    </div>
                    <div className="col-3">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/616/616490.svg" alt="Rating" width="70"/>
                        <h5><span className="h1">4.5</span><br/>Rating</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home