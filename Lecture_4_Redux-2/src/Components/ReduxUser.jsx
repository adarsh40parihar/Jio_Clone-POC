import React, { useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import  fetchUserMiddleWare  from "../MiddleWare/fetchUserMiddleWare";

function UserComponent() {
    const { user, loading, error } = useSelector((store) => store.userSection);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserMiddleWare(3))
    },[])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message
        }</div>
    }
    return (
      <div>
            <h4>Name: { user.name}</h4>
            <h4> Phone: {user.phone}</h4>
      </div>
    );
}

export default UserComponent;