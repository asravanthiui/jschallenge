import * as actionTypes from '../consts';

const initialState = {
    tweetsOne: null,
    tweetsTwo: null,
};

const tweetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TWEETS_USER_ONE:
            return {
                ...state,
                tweetsOne: action.payload,
                tweetsTwo: null
            }
        case actionTypes.TWEETS_USER_TWO:
            return {
                ...state,
                tweetsTwo: action.payload,
                tweetsOne: null
            }
        default:
            return state;
    }
}

export default tweetsReducer;
