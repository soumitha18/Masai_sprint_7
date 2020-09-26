import {FETCH_STUDENT_FAILURE, FETCH_STUDENT_REQUEST, FETCH_STUDENT_SUCCESS, ADDING_STUDENT_FAILURE,ADDING_STUDENT_REQUEST,ADDING_STUDENT_SUCCESS,DELETING_STUDENT_FAILURE,DELETING_STUDENT_REQUEST, DELETING_STUDENT_SUCCESS} from "./actionTypes"
import axios from "axios"

const fetchStudentRequest = () => {
    return {
        type : FETCH_STUDENT_REQUEST
    }
}

const fetchStudentFailure = error =>{
    return {
        type : FETCH_STUDENT_FAILURE,
        error : error
    }
}

const fetchStudentSuccess = data => {
    return {
        type : FETCH_STUDENT_SUCCESS,
        data : data
    }
}

const fetchingStudents = () => {
    return dispatch => {
        dispatch(fetchStudentRequest())
        return axios
            .get(`http://localhost:8080/students`)
            .then(res => console.log(res))
            .catch(err => dispatch(fetchStudentRequest(err)))
    }
}

export {
    fetchingStudents,
    fetchStudentFailure,
    fetchStudentRequest,
    fetchStudentSuccess
}