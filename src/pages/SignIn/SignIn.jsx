
import { useDispatch } from 'react-redux';
import './SignIn.css';
import { update, updateName, updateSign } from '../../store/Reducers/loginReducer';
import {auth} from '../../firebase';
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import FormInput from '../../components/shared/FormInput/FormInput';
import { useState } from 'react';

function SignIn(){
   
    const dispatch = useDispatch();
    const [values, setValues] = useState({
       email: "",
       password: ""
    })
    const inputs = [
        {
            name: "email",
            type: "email",
            placeholder: "User Email",
            errorMessage: "Invalid Email",
            required: true
           },
           {
               name: "password",
               type: "password",
               placeholder: "Password",
               errorMessage: "Enter atleast 8 characters with atleast 1 letter, 1 special character and 1 number",
               pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
               required: true
           },
    ]

    function handleSignIn(e)
    {
      e.preventDefault();
      console.log(e);
      const email = e.target[0].value;
      const password = e.target[1].value;
      signInWithEmailAndPassword(auth,email,password)
      .then(res => {
        dispatch(update(!!auth.currentUser));
        console.log(res);
         })
      .catch(e => console.log(e));
    }

    function onChange(e){
        setValues({...values,[e.target.name]: e.target.value});
    }

    return(
        <div className="sign-in-wrapper">
            <div className="sign-in-container">
                <h3 style={{color: 'white'}}>Please Login First !!!</h3>
                <hr style={{color: 'white'}}/>
                <form onSubmit={(e) => handleSignIn(e)}>
                         
                         {
                            inputs.map((input) => (
                                <FormInput {...input} value={values[input.name]} onChange={onChange}/>
                            ))
                         }
                
                <div className="btn-container">
                <button className="btn btn-success sign-button" type='submit'>Sign In</button>
                </div>

                <div className="signup-link">
                    <span className="signup-link-text">Don't have an account? </span>
                    <span onClick={() => dispatch(updateSign(false))} style={{textDecoration: 'none', fontWeight: 'bolder', cursor: 'pointer'}}>SignUp</span>
                </div>

                </form>
            </div>
        </div>
    );
}

export default SignIn;