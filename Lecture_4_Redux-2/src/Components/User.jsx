import React, { useEffect, useState } from 'react'

function UserComponent() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getUser() {
            try {
                setLoading(true);
                //fetch the user and update the state
                const userResp = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const userData = await userResp.json();
                setUser(userData);
                setLoading(false);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }

        } 
        getUser();
    }, [])   // runs on first rendering

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