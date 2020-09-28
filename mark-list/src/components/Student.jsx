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

    return (
        <div>
            {
                data && !edit
                    ?
                    <div>
                        <h1>Name : {data.name}</h1>
                        <h3>Class : {data.class}</h3>
                        <p>Subject1 : <b>{data.sub1}</b></p>
                        <p>Subject2 : <b>{data.sub2}</b></p>
                        <p>Subject3 : <b>{data.sub3}</b></p>
                        <p>Total : <b>{data.total}</b></p>
                        <p>Average : <b>{data.avg}</b></p>
                        <p>Grade : <b>{data.grade}</b></p>
                        <button onClick={() => setEdit(true)}>EDIT</button>
                        <button onClick={goingBack}>BACK</button>
                    </div>
                    :
                    <div>
                        <h5>Edit</h5>
                        <input type="text" placeholder="Enter the Name " value={name} onChange={e => setName(e.target.value)} />
                        <input type="text" placeholder="Enter the Class" value={cls} onChange={e => setCls(e.target.value)} />
                        <input type="number" placeholder="Enter the Subject1" value={sub1} onChange={e => setSub1(e.target.value)} />
                        <input type="number" placeholder="Enter the Subject2" value={sub2} onChange={e => setSub2(e.target.value)} />
                        <input type="number" placeholder="Enter the Subject3" value={sub3} onChange={e => setSub3(e.target.value)} />
                        <button className="btn btn-success" onClick={handleUpdate}>Update</button>
                        <button onClick={() => setEdit(false)}>Cancel</button>
                    </div>
            }
        </div>
    )
}

export default Student