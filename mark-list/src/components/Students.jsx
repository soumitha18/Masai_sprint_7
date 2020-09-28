import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteStudent } from "../Redux/actions"
import axios from "axios"
import { useHistory } from "react-router"

function Student() {
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    const fetching = () => {
        axios.get(`http://localhost:8080/students`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetching()
        console.log("yes")
    }, [])

    const handleDelete = (id) => {
        dispatch(deleteStudent(id))
        fetching()
    }

    const handleEdit = (id) => {
        history.push(`/student/${id}`)
    }

    const handleChange = (val) => {
        console.log(val)
        switch (val) {
            case "low":
                setData(data.sort((std1, std2) => std2.avg - std1.avg))
                break
            case "high":
                setData(data.sort((std1, std2) => std1.avg - std2.avg))
                break
            default:
                fetching()
        }
    }
    return (
        <div className="mt-5" style={{ background: "whitesmoke" }}>
            <div className="container mt-5 text-center">
                <div className="row">
                    <div className="col-6">
                        <h1 className="text-center pt-3" style={{ color: " #16a085 " }}>Reports</h1>
                    </div>
                    <div className="col-6 pt-4">
                        <select onChange={e => handleChange(e.target.value)}>
                            <option value="default">default</option>
                            <option value="high">High</option>
                            <option value="low">low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="container">


                <div className="row">
                    {
                        data && data.map(item => (
                            <div key={item.id} className="col-4 p-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">{item.name}</h3>
                                        <div className="card-text">
                                            <p>subject1 : <b>{item.sub1}</b></p>
                                            <p>subject2 : <b>{item.sub2}</b></p>
                                            <p>subject3 : <b>{item.sub3}</b></p>
                                        </div>
                                        <button className="btn btn-success mx-3" onClick={() => handleEdit(item.id)}>View</button>
                                        <button className="btn btn-danger mx-3" onClick={() => handleDelete(item.id)} >Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Student