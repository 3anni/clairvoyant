// frontend/src/components/LoginFormModal/LoginForm.js
import React, {  } from 'react';
import { NavLink } from 'react-router-dom';
// internal
import { useInput, useSubmit } from '../../hooks';
import { login } from '../../store/session';
import {FormErrors, Input, SubmitButton} from '../../components/Form';
import { ModalWrapper } from '../../context/ModalWrapper';
import ModalUtil from '../../context/ModalUtil';
import SignUpModal from '../SignUpModal';
import ModalButton from '../../context/ModalButton';

function LoginModal(props) {
  const [credential, credentialChange] = useInput('');
  const [password, passwordChange] = useInput('');
  let [errors, handleSubmit] = useSubmit({
    createAction: () => login({ credential, password }),
    onSuccess: () => {
      console.log('in success')
      console.log(props);
      console.log(window);
      props.close();
    },
  });

  return (
    <ModalWrapper>
      <div className="modal">
      <div className="modal-background">
        <h2>Sign in with email</h2>
        <p>Enter your email address and password.</p>
        {errors ? <FormErrors className='login-errors' errors={errors}/> : ''}
        <form onSubmit={handleSubmit}>
          <Input label=""
            className="credentials email"
            type="text"
            value={credential}
            onChange={credentialChange}
            placeholder="Email"
            required
          />
          <br/>
          <Input label=""
            className="credentials password"
            type="password"
            value={password}
            onChange={passwordChange}
            placeholder="Password"
            required
          />
          <br/>
          <SubmitButton label="Login" className="btn" />
          <ModalButton label="Sign Up" modal={SignUpModal} />
          {/* <button onClick={ openSignUpModal } className="btn">Sign Up</button> */}
          <NavLink to="/demouser">Demo User</NavLink>
      </form>
      <p>DEMO USER LINK</p>
      {/* TODO: ADD A LINK TO '< All sign in options' (prev-modal)*/}
      <button onClick={ props.close } className="btn">X</button>
    </div>
    </div>
    </ModalWrapper>
  );
}

export default LoginModal;








