import { userActions } from "../Redux/slice/UserSlice";

const fetchUserMiddleWare = (params) => {
    //redux thunk middleware handle this
    return async function (dispatch) { 
        try {
            dispatch(userActions.onPending);
            //fetch the user and update the state
            const userResp = await fetch(`https://jsonplaceholder.typicode.com/users/${params}`);
            const userData = await userResp.json();
            dispatch(userActions.onFulfilled(userData));
        } catch (err) {
            dispatch(userActions.onRejected(err));
        } 
    }

};
export default fetchUserMiddleWare;
