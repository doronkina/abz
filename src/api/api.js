import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/'
})

export const getUsers = async (page, count) => {
    const res = await instance.get(`users?page=${page}&count=${count}`)
    return res.data
}

export const getPositions = async () => {
    const res = await instance.get('positions')
    return res.data
}

export const getToken = async () => {
    const res = await instance.get('token')
    return res.data.token
}

export const postUser = async (formData, token) => {
    try {
        const res = await instance.post( 'users', formData, { headers: {"Token": token} } )
        return res.data
    } catch(err) {
        return err.response.data
    }
}