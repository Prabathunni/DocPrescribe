import React, { useEffect, useState } from 'react'
import { verifyAPI } from '../services/apiServices';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {

    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const verify = async () => {
            const isUserAuthenticated = await verifyAPI()
            setAuth(isUserAuthenticated)
        }

        verify()
    }, [])

    if (auth === null) return <div><Spinner animation="border" variant="light" /></div>
    if (auth === false) return <Navigate to={'/'} />

    return children;
}

export default PrivateRoute