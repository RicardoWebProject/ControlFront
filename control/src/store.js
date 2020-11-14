import {createStore} from 'redux';

const initialState = {
    token: ''
}

const reducer = (state = initialState, action) => {
    return state
}

export default createStore(reducer);