// frontend/src/components/LoginFormModal/LoginForm.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./LoginModal.css";
import { useInput, useSubmit } from "../../hooks";
import { login } from "../../store/session";
import {FormErrors, Input, SubmitButton} from "../Blocks";

function LoginModal() {
  const [credential, credentialChange] = useInput('');
  const [password, passwordChange] = useInput('');
  let [errors, handleSubmit] = useSubmit({
    createAction: () => login({ credential, password })
      // const user = { credential, password };
      // return login(user);
    // }
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormErrors className='login-errors' errors={errors}/>
      <Input label="Username or Email"
        type="text"
        value={credential}
        onChange={credentialChange}
        required
      />
      <Input label="Password"
        type="password"
        value={password}
        onChange={passwordChange}
        required
      />
      <SubmitButton label="Sign In"/>
    </form>
  );
}

export default LoginModal;




/*
const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const state = useSelector(state => state);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const res = dispatch(sessionActions.login({ credential, password }));

        if (res && res.user) {
            return <Redirect to="/" />
        } else {
            setErrors(['Invalid username or password'])
        }
        // return dispatch(sessionActions.login({ credential, password }))
        //     .catch(async (res) => {
        //         let data;
        //         try {
        //             // .clone() allows you to read the response body twice
        //             data = await res.clone().json();
        //         } catch {
        //             data = await res.text();
        //         }
        //         if (data?.errors) setErrors(data.errors);
        //         else if (data) setErrors([data]);
        //         else setErrors([res.statusText]);
        //     })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='login-form'>
                <h2 className="login-form-message">Sign in with email</h2>
                <label className="your-email">Your email</label>
                <br/>
                    <input
                        className="text-input-centered"
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        placeholder="Email"
                        required
                    /> <br/>
                <label>
                    <input
                        className="text-input-centered"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    /> <br/>
                </label>

                <button type="submit">Submit</button>
                <p>TBU: SIGN IN WITH GOOGLE</p>
                <p>DEMO USER LINK</p>
            </form>
            <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
        </>
    );
};

export default LoginFormPage;

*/





