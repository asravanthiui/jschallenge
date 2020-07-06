import * as actionTypes from '../consts';

export const tweetsUserOneRequest = () => {
    return {
        type: actionTypes.API_CALL_REQUEST_USER_ONE
    }
}

export const tweetsUserTwoRequest = () => {
    return {
        type: actionTypes.API_CALL_REQUEST_USER_TWO
    }
}

export const tweetsUserOne = payload => {
    return {
        type: actionTypes.TWEETS_USER_ONE,
        payload
    }
}

export const tweetsUserTwo = payload => {
    return {
        type: actionTypes.TWEETS_USER_TWO,
        payload
    }
}
