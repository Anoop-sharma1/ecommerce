import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";


function ForgotPassword({ history }) {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        if (user && user.token) {
            history.push('/');
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const config = {
            url: process.env.REACT_APP_FOTGOT_PASSWORD_URL,
            handleCodeInApp: true,
        };

        console.log(config)
        await auth.sendPasswordResetEmail(email, config)
            .then(() => {
                setEmail('');
                setLoading(false)
                toast.success('check your email for password link')
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message)
                console.log("Error message in forgot password" + error)
            })

    };

    return (
        <div className="container col-md-6 offset-md-3 p-5">
            {loading ? <h4 className="text-danger">Loading..</h4> : <h4>Forgot Password</h4>}

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type your email"
                    autoFocus
                />

                <br />

                <button className="btn btn-raised" disabled={!email}>Submit</button>
            </form>
        </div>
    )
}

export default ForgotPassword