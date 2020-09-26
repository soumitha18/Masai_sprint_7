import { FETCH_STUDENT_SUCCESS, FETCH_STUDENT_FAILURE, FETCH_STUDENT_REQUEST, ADDING_STUDENT_SUCCESS, ADDING_STUDENT_REQUEST, ADDING_STUDENT_FAILURE, DELETING_STUDENT_SUCCESS, DELETING_STUDENT_REQUEST, DELETING_STUDENT_FAILURE } from "./actionTypes"

export const initState = {
    data: [],
    error: ""
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_STUDENT_REQUEST:
            return {
                ...state
            }
        case FETCH_STUDENT_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case FETCH_STUDENT_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

export default reducer