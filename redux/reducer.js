// Read the documentation at https://redux.js.org/basics/reducers
// Redux reducer file. Maps the action to actual code which updates redux's state. 
// Each action recieves the old redux state, clones it, modifies the clones, and then returns the new state.
// Don't modify the redux state directly

import {
    TOGGLE_DATA_BY_ID,
    RESET_STATE,
    STORE_DATA,
} from './actions'


const initialState = {
    categories: [],
    cuisine: [],
    restaurant: [],
}


export default function app(state = initialState, action) {
    switch (action.type) {

        case STORE_DATA:
            return Object.assign({}, state, {
                [action.target]: action.dataArray
            });

        case TOGGLE_DATA_BY_ID:
            const newData = toggleValues(state[action.target], action.ID)
            return Object.assign({}, state, {
                [action.target]: newData
            });

        case RESET_STATE:
            return initialState

        default:
            return state
    }
}

const toggleValues = (currentValues, ID) => {
    let newValues = JSON.parse(JSON.stringify(currentValues))
    if (!newValues.includes(ID)) {
        newValues.push(ID)
    }
    else {
        newValues.splice(newValues.indexOf(ID), 1)
    }
    return newValues
}
