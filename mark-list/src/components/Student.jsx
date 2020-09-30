import Axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router"
import { editStudent } from "../Redux/actions"

function Student() {
    const [data, setData] = useState({})
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState("")
    const [cls, setCls] = useState("")
    const [sub1, setSub1] = useState(0)
    const [sub2, setSub2] = useState(0)
    const [sub3, setSub3] = useState(0)
    const params = useParams()
    const id = params.id
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        fetching()
    }, [])

    const fetching = () => {
        Axios
            .get(`http://localhost:8080/students/${id}`)
            .then(res => {
                setData(res.data)
                setName(res.data.name)
                setCls(res.data.class)
                setSub1(res.data.sub1)
                setSub2(res.data.sub2)
                setSub3(res.data.sub3)

            })
            .catch(err => console.log(err))
    }

    const goingBack = () => {
        history.push("/students")
    }

    const handleUpdate = () => {
        const obj = {
            "id": data.id,
            "name": name,
            "class": cls,
            "sub1": Number(sub1),
            "sub2": Number(sub2),
            "sub3": Number(sub3),
            "total": Number(sub1) + Number(sub2) + Number(sub3),
            "avg": Math.floor((Number(sub1) + Number(sub2) + Number(sub3)) / 3),
            "grade": "A"
        }
        setEdit(false)
        dispatch(editStudent(obj, data.id))
        fetching(id)
    }

    const PrintReport = () => {
        alert("The report card is successfully printed!")
        goingBack()
    }

    return (
        <div>
            {
                data && !edit
                    ?
                    <div className="container my-5 pt-5">
                        <div class="card shadow">
                            <div class="card-header text-center">
                                <div>
                                    <h1>{data.name}'s Report Card</h1>
                                </div>
                            </div>
                            <div class="card-body px-5">
                                <div className="offset-1">
                                    <p>Grade : <b className="h3">{data.grade}</b></p>
                                    <table class="table table-striped text-center my-5" style={{ width: "85%" }}>
                                        <tbody className="font-weight-bold">
                                            <tr>
                                                <td>Subject 1</td>
                                                <td>{data.sub1}</td>
                                            </tr>
                                            <tr>
                                                <td>Subject 2</td>
                                                <td>{data.sub2}</td>
                                            </tr>
                                            <tr>
                                                <td>Subject 3</td>
                                                <td>{data.sub3}</td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td>{data.total}</td>
                                            </tr>
                                            <tr>
                                                <td>Average</td>
                                                <td>{data.avg}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary mx-4" onClick={() => setEdit(true)}>EDIT</button>
                                    <button className="btn btn-success mx-4" onClick={() => PrintReport()}>Print</button>
                                    <button className="btn btn-danger mx-4" onClick={goingBack}>BACK</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div className="container my-5 pt-5">
                        <div className="row">
                            <div className="col-6 offset-3">
                                <div className="card shadow">
                                    <div class="card-header text-center">
                                        <div>
                                            <h3>Edit Here</h3>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <small className="font-weight-bolder">Name</small>
                                        <input className="w-100 my-2" type="text" placeholder="Enter the Name " value={name} onChange={e => setName(e.target.value)} /><br />
                                        <small className="font-weight-bolder">Class</small>
                                        <input className="w-100 my-2" type="text" placeholder="Enter the Class" value={cls} onChange={e => setCls(e.target.value)} /><br />
                                        <small className="font-weight-bolder">Subject1</small>
                                        <input className="w-100 my-2" type="number" placeholder="Enter the Subject1" value={sub1} onChange={e => setSub1(e.target.value)} /><br />
                                        <small className="font-weight-bolder">Subject2</small>
                                        <input className="w-100 my-2" type="number" placeholder="Enter the Subject2" value={sub2} onChange={e => setSub2(e.target.value)} /><br />
                                        <small className="font-weight-bolder">Subject3</small>
                                        <input className="w-100 my-2" type="number" placeholder="Enter the Subject3" value={sub3} onChange={e => setSub3(e.target.value)} />
                                        <div className="text-center">
                                            <button className="btn btn-success mx-4" onClick={handleUpdate}>Update</button>
                                            <button className="btn btn-danger mx-4" onClick={() => setEdit(false)}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Student