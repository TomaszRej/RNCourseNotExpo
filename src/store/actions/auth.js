import {TRY_AUTH} from './actionTypes';
import {uiStartLoading,uiStopLoading} from './ui';

export const tryAuth = (authData) => {
    return dispatch => {
      dispatch(authSignup(authData));
    }
};

export const authSignup = (authData) => {

    return (dispatch) => {
        dispatch(uiStartLoading());
        fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDh92w4grWO1mFUnT4cQx19Y4VEgor9aX8', {
            method: 'POST',
            body: JSON.stringify({
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            }),
            headers:{
                "Content-Type": "application/json"
            }
        })
            .catch(err =>{
                console.log(err);
                alert("sprobuj jeszcze raz wystapil blad");
                dispatch(uiStopLoading());
            })
            .then(res => res.json())
            .then(parseRes => {
                console.log(parseRes);
                dispatch(uiStopLoading());
            })

    }
};
