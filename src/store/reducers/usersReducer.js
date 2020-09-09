import { getUsers as toGetUsers,
         getToken as toGetToken,
         postUser as toPostUser } from './../../api/api'

const SET_USERS = 'SET-USERS'
const RELOAD_USERS = 'RELOAD-USERS'
const POST_FAILED = 'POST-FAILED'

let initialState = {
    count: null,
    page: null,
    total_pages: null,
    users: [],
    postMessage: null,
    postFails: {}
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                count: action.count,
                page: action.page,
                total_pages: action.total_pages,
                users: [...state.users, ...action.users]
            }
        case RELOAD_USERS:
            return {
                ...state,
                page: action.page,
                total_pages: action.total_pages,
                users: [...action.users],
                postMessage: action.message,
                postFails: {}
            }
        case POST_FAILED:
            return {
                ...state,
                postMessage: action.message,
                postFails: action.fails
            }
        default:
            return state
    }
}

const setUsers = (count, page, total_pages, users) => ( {type: SET_USERS, count, page, total_pages, users} )
const reloadUsers = (page, total_pages, users, message) => ( {type: RELOAD_USERS, page, total_pages, users, message} )
const postFailed = (message, fails) => ( {type: POST_FAILED, message, fails} )

export const getUsers = (page, count) => async dispatch => {
    const res = await toGetUsers(page, count)
    const {total_pages, users} = res
    await dispatch( setUsers(count, page, total_pages, users) )
}
export const createUser = (values, page, count) => async dispatch => {
    const token = await toGetToken()

    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('phone', values.phone)
    formData.append('position_id', +values.position)
    formData.append('photo', values.img)

    const postRes = await toPostUser(formData, token)

    if (postRes.success) {
        const res = await toGetUsers(page, count)
        const {total_pages, users, message} = res
        await dispatch( reloadUsers(page, total_pages, users, message) )
    } else {
        const fails = postRes.fails ? postRes.fails : {}
        await dispatch( postFailed(postRes.message, fails) )
    }
}

export default usersReducer