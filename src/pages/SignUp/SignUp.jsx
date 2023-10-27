
import { useDispatch } from 'react-redux';
import './SignUp.css';
import { update, updateName, updateSign } from '../../store/Reducers/loginReducer';
import {auth} from '../../firebase';
import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth';
import {updateProfile} from 'firebase/auth';
import FormInput from '../../components/shared/FormInput/FormInput';
import { useState } from 'react';

function SignUp(){
   
    const dispatch = useDispatch();

    const [values, setValues] = useState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
   })

   const inputs = [
           {
               name: "displayName",
               type: "text",
               placeholder: "Display Name",
               errorMessage: "Please enter a name within 3-16 range",
               pattern: "^[A-Za-z0-9]{3,16}$",
               required: true
           },
           {
            name: "email",
            type: "email",
            placeholder: "User Email",
            errorMessage: "Please enter a valid email id",
            required: true
           },
           {
               name: "password",
               type: "password",
               placeholder: "Password",
               errorMessage: "Please enter atleast 8 characters with atleast - - - [1 letter, 1 special character and 1 number]",
               pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
               required: true
           },
           {
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match",
            pattern: values.password,
            required: true
        },
   ]

    function handleSubmit(e){
      e.preventDefault();
      const dName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      createUserWithEmailAndPassword(auth,email,password)
      .then(res => {
      dispatch(update(!!auth.currentUser));
      updateProfile(auth.currentUser,{displayName: dName});
        console.log(res);
         })
      .catch(e => console.log(e));
    }

    function onChange(e){
      setValues({...values,[e.target.name]: e.target.value});
  }

    return(
        <div className="sign-up-wrapper">
            <div className="sign-up-container">
                <h3 style={{color: 'white'}}>Create an Account !!!</h3>
                <hr style={{color: 'white'}}/>
                <form onSubmit={(e) => handleSubmit(e)}>
                   
                {
                            inputs.map((input) => (
                                <FormInput {...input} value={values[input.name]} onChange={onChange}/>
                            ))
                }

                <div className="btn-container">
                <button type="submit" className="btn btn-success sign-button">Sign Up</button>
                </div>

                </form>
                
                <div className="signup-link">
                    <span className="signup-link-text">Already have an account? </span>
                    <a onClick={() => dispatch(updateSign(true))} style={{textDecoration: 'none', fontWeight: 'bolder',cursor: 'pointer'}}>SignIn</a>
                </div>

            </div>
        </div>
    );
}

export default SignUp;