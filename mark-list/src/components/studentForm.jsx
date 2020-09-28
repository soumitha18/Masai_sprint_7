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
        <div className="mt-5">
            <input type="text" placeholder="Enter the Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Enter the Class" value={cls} onChange={e => setCls(e.target.value)} />
            <input type="number" placeholder="Enter the Subject1 Marks" value={sub1} onChange={e => setSub1(e.target.value)} />
            <input type="number" placeholder="Enter the Subject2 Marks" value={sub2} onChange={e => setSub2(e.target.value)} />
            <input type="number" placeholder="Enter the Subject3 Marks" value={sub3} onChange={e => setSub3(e.target.value)} />
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}

export default StudentForm