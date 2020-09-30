import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addingStudent } from "../Redux/actions"
import { v4 as uuid } from 'uuid'
import { useHistory } from "react-router"

function StudentForm() {

    const [name, setName] = useState("")
    const [cls, setCls] = useState("")
    const [sub1, setSub1] = useState(0)
    const [sub2, setSub2] = useState(0)
    const [sub3, setSub3] = useState(0)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleAdd = () => {
        let obj = {
            "id": uuid(),
            "name": name,
            "class": cls,
            "sub1": Number(sub1),
            "sub2": Number(sub2),
            "sub3": Number(sub3),
            "total": Number(sub1) + Number(sub2) + Number(sub3),
            "avg": Math.floor((Number(sub1) + Number(sub2) + Number(sub3)) / 3),
            "grade": "A"
        }

        dispatch(addingStudent(obj))
        history.push("/students")

    }

    return (
        <div className="container my-5 pt-5">
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="card">
                        <div className="card-header text-center font-weight-bolder">
                            ADD STUDENT FORM
                        </div>
                        <div className="card-body">
                            <small><b>Name:</b></small>
                            <input className="w-100 my-2" type="text" placeholder="Enter the Name" value={name} onChange={e => setName(e.target.value)} /><br />
                            <small><b>Class:</b></small>
                            <input className="w-100 my-2" type="text" placeholder="Enter the Class" value={cls} onChange={e => setCls(e.target.value)} />
                            <h5 className="mt-3">Enter Subjects Marks</h5>
                            <small><b>Subject1 :</b></small>
                            <input className="w-100 my-2" type="number" placeholder="Enter the Subject1 Marks" value={sub1} onChange={e => setSub1(e.target.value)} /><br />
                            <small><b>Subject2 :</b></small>
                            <input className="w-100 my-2" type="number" placeholder="Enter the Subject2 Marks" value={sub2} onChange={e => setSub2(e.target.value)} /><br />
                            <small><b>Subject3 :</b></small>
                            <input className="w-100 my-2" type="number" placeholder="Enter the Subject3 Marks" value={sub3} onChange={e => setSub3(e.target.value)} />
                            <div className="text-center">
                                <button className="btn btn-success" onClick={handleAdd}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentForm