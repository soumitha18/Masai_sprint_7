import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addingStudent, deleteStudent } from "../Redux/actions"
import axios from "axios"

function Student() {
    const [data, setData] = useState([])
    const dispatch = useDispatch()

    const fetching = () => {
        axios.get(`http://localhost:8080/students`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetching()
    }, [])

    const handleDelete = (id) => {
        dispatch(deleteStudent(id))
        fetching()
    }

    const handleEdit = (id) => {
        console.log(id)
    }

    const handleAdd = () => {
        let obj = {
            "id": "7",
            "name": "sou",
            "class": 9,
            "sub1": 80,
            "sub2": 80,
            "sub3": 50,
            "total": 210,
            "avg": 70,
            "grade": "B"
        }

        dispatch(addingStudent(obj))

    }

    console.log(data)

    return (
        <div>
            <button onClick={handleAdd}>add</button>
            {
                data && data.map(item => (
                    <div key={item.id}>
                        {item.name} <button onClick={() => handleEdit(item.id)}>Edit</button> <button onClick={() => handleDelete(item.id)} >Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Student