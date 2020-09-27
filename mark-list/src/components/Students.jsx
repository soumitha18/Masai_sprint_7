import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteStudent } from "../Redux/actions"
import axios from "axios"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

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
    }, [])

    const handleDelete = (id) => {
        dispatch(deleteStudent(id))
        fetching()
    }

    const handleEdit = (id) => {
        history.push(`/student/${id}`)
    }

    return (
        <div>
            {
                data && data.map(item => (
                    <div key={item.id}>
                        <Link to={`/student/${item.id}`}>{item.name}</Link><button onClick={() => handleEdit(item.id)}>Edit</button> <button onClick={() => handleDelete(item.id)} >Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Student