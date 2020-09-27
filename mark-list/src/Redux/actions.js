import { EDIT_STUDENT_FAILURE, EDIT_STUDENT_REQUEST, EDIT_STUDENT_SUCCESS, ADDING_STUDENT_FAILURE, ADDING_STUDENT_REQUEST, ADDING_STUDENT_SUCCESS, DELETING_STUDENT_FAILURE, DELETING_STUDENT_REQUEST, DELETING_STUDENT_SUCCESS } from "./actionTypes"
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
            .catch(err => deleteStudentFailure())
    }
}

const addingStudentRequest = (query) => {
    return {
        type: ADDING_STUDENT_REQUEST,
        query: query
    }
}

const addingStudentFailure = () => {
    return {
        type: ADDING_STUDENT_FAILURE,
        error: true
    }
}

const addingStudentSuccess = () => {
    return {
        type: ADDING_STUDENT_SUCCESS,
        add: true
    }
}

const addingStudent = (query = {}) => {
    return dispatch => {
        addingStudentRequest(query)
        return axios
            .post(`http://localhost:8080/students`, query)
            .then(res => addingStudentSuccess())
            .catch(err => addingStudentFailure())
    }
}

const editingStudentRequest = (query, id) => {
    return {
        type: EDIT_STUDENT_REQUEST,
        query: query,
        id: id
    }
}

const editingStudentFailure = () => {
    return {
        type: EDIT_STUDENT_FAILURE,
        error: true
    }
}

const editingStudentSuccess = () => {
    return {
        type: EDIT_STUDENT_SUCCESS,
        edit: true
    }
}

const editStudent = (query = {}, id = 0) => {
    return dispatch => {
        editingStudentRequest(query, id)
        return axios
            .patch(`http://localhost:8080/students/${id}`, query)
            .then(res => editingStudentSuccess())
            .catch(err => editingStudentFailure())
    }
}

export {
    deleteStudent,
    deleteStudentFailure,
    deleteStudentRequest,
    deleteStudentSuccess,
    addingStudent,
    addingStudentRequest,
    addingStudentSuccess,
    addingStudentFailure,
    editStudent,
    editingStudentRequest,
    editingStudentSuccess,
    editingStudentFailure
}