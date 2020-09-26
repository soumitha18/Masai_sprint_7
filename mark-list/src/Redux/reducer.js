import { ADDING_STUDENT_SUCCESS, ADDING_STUDENT_REQUEST, ADDING_STUDENT_FAILURE, DELETING_STUDENT_SUCCESS, DELETING_STUDENT_REQUEST, DELETING_STUDENT_FAILURE } from "./actionTypes"

export const initState = {
    add: false,
    error: false,
    delete: false,
    id: 0,
    query: {}
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case DELETING_STUDENT_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case DELETING_STUDENT_SUCCESS:
            return {
                ...state,
                delete: action.delete
            }
        case DELETING_STUDENT_REQUEST:
            return {
                ...state,
                id: action.id
            }
        case ADDING_STUDENT_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case ADDING_STUDENT_REQUEST:
            return {
                ...state,
                query: action.query
            }
        case ADDING_STUDENT_SUCCESS:
            return {
                ...state,
                add: action.add
            }
        default:
            return state
    }
}

export default reducer