import { ADDING_STUDENT_FAILURE, ADDING_STUDENT_REQUEST, ADDING_STUDENT_SUCCESS, DELETING_STUDENT_FAILURE, DELETING_STUDENT_REQUEST, DELETING_STUDENT_SUCCESS } from "./actionTypes"
import axios from "axios"

const deleteStudentRequest = (id) => {
    return {
        type: DELETING_STUDENT_REQUEST,
        id: id
    }
}

const deleteStudentFailure = () => {
    return {
        type: DELETING_STUDENT_FAILURE,
        error: true
    }
}

const deleteStudentSuccess = () => {
    return {
        type: DELETING_STUDENT_SUCCESS,
        delete: true
    }
}

const deleteStudent = (id) => {
    return dispatch => {
        deleteStudentRequest(id)
        return axios
            .delete(`http://localhost:8080/students/${id}`)
            .then(res => deleteStudentSuccess())
            .then(err => deleteStudentFailure())
    }
}

const addingStudentRequest = (query) => {
    console.log(query)
}

const addingStudent = (query = {}) => {
    return dispatch => {
        addingStudentRequest(query)
        return axios
            .post(`http://localhost:8080/students`, query)
            .then(res => console.log(res))
            .then(err => console.log(err))
    }
}

export {
    deleteStudent,
    deleteStudentFailure,
    deleteStudentRequest,
    deleteStudentSuccess,
    addingStudent,
    addingStudentRequest
}