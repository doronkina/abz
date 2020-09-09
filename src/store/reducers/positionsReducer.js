import { getPositions as toGetPositions } from './../../api/api'

const SET_POSITIONS = 'SET-POSITIONS'

let initialState = {
    positions: []
}

const positionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSITIONS:
            return {
                ...state,
                positions: [...action.positions]
            }
        default:
            return state
    }
}

const setPositions = positions => ( {type: SET_POSITIONS, positions} )

export const getPositions = () => async dispatch => {
    const res = await toGetPositions()
    await dispatch( setPositions(res.positions) )
}

export default positionsReducer